"use client";

import { useState } from "react";
import { usePokemons } from "../../hooks/usePokemons";
import PokemonListFiltered from "./PokemonListFiltered";
import PokemonListAll from "./PokemonListAll";

const LIMIT = 20;

export const PokemonList = () => {
  const [page, setPage] = useState(0);
  const { pokemons, pokemonByType, types, setSelectTypes, typesSelected, isLoading, refetch } = usePokemons(page * LIMIT, LIMIT);

  const isFiltering = typesSelected && typesSelected.length > 0;

  if (isFiltering && pokemonByType) {
    return (
      <PokemonListFiltered
        pokemonByType={pokemonByType}
        types={types ?? []}
        typesSelected={typesSelected}
        setSelectTypes={setSelectTypes}
        refetch={refetch}
      />
    );
  }

  return (
    <PokemonListAll
      pokemons={pokemons}
      types={types ?? []}
      typesSelected={typesSelected ?? []}
      isLoading={isLoading}
      setSelectTypes={setSelectTypes}
      onPageChange={setPage}
      currentPage={page}
      refetch={refetch}
    />
  );
};
