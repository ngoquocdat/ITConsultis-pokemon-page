"use client";

import { useQuery } from "@tanstack/react-query";
import { getPokemons } from "../api/APIMethods/getPokemons";
import { useCallback, useMemo, useState } from "react";
import { getPokemonByType, getTypes } from "../api/APIMethods/getPokemonTypes";
import { PokemonListResponse } from "../api/types";
import { deduplicatePokemon } from "../utils";

// Query key constants for maintainability and cache management
const QUERY_KEYS = {
  types: () => ["pokemon.types"] as const,
  pokemons: (offset: number) => ["pokemon.all", offset] as const,
  pokemonByType: (types: string[]) => ["pokemon.byType", types] as const,
} as const;

export const usePokemons = (
  offset: number,
  limit: number,
  initialData?: PokemonListResponse
) => {
  const [typesSelected, setSelectTypes] = useState<string[]>([]);

  // Memoize the deduplicate function to prevent recreation on every render
  const deduplicatePokemonMemo = useCallback(deduplicatePokemon, []);

  const handleSetSelectTypes = useCallback((types: string[]) => {
    setSelectTypes(types);
  }, []);

  const {
    data: types,
    error: typesError,
    isLoading: isLoadingTypes,
  } = useQuery({
    queryKey: QUERY_KEYS.types(),
    queryFn: getTypes,
    staleTime: Infinity,
  });

  const {
    data: pokemons,
    error: pokemonsError,
    isLoading: isLoadingPokemons,
    refetch: refetchPokemons,
  } = useQuery({
    queryKey: QUERY_KEYS.pokemons(offset),
    queryFn: () => getPokemons(offset, limit),
    staleTime: Infinity,
    gcTime: 30 * 60 * 1000,
    initialData: offset === 0 ? initialData : undefined,
  });

  const {
    data: pokemonByType,
    error: pokemonByTypeError,
    isLoading: isLoadingPokemonByType,
  } = useQuery({
    queryKey: QUERY_KEYS.pokemonByType(typesSelected),
    queryFn: async () => {
      if (typesSelected.length === 0) {
        return [];
      }

      const results = await Promise.all(
        typesSelected.map((type) => getPokemonByType(type))
      );

      const merged = results.flatMap((res) =>
        res.pokemon.map((p) => p.pokemon)
      );

      return deduplicatePokemonMemo(merged);
    },
    enabled: typesSelected.length > 0,
    staleTime: 10 * 60 * 1000,
  });

  // Memoize loading state to prevent unnecessary re-renders
  const isLoading = useMemo(
    () =>
      typesSelected.length > 0 ? isLoadingPokemonByType : isLoadingPokemons,
    [typesSelected.length, isLoadingPokemonByType, isLoadingPokemons]
  );

  const error = typesSelected.length > 0 ? pokemonByTypeError : pokemonsError;

  return {
    pokemons,
    refetch: refetchPokemons,
    pokemonByType,
    types,
    setSelectTypes: handleSetSelectTypes,
    typesSelected,
    isLoading,
    error,
    isLoadingTypes,
  } as const;
};
