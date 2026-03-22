"use client";

import { useState } from "react";
import { usePokemons } from "../../hooks/usePokemons";
import { PokemonListResponse } from "../../api/types";
import PokemonListFiltered from "../molecules/PokemonListFiltered";
import PokemonListAll from "../molecules/PokemonListAll";
import EmptyState from "../../../../shared/ui/EmptyPokemon";

const LIMIT = 20;

type PokemonListProps = {
  initialData?: PokemonListResponse;
};

export const PokemonList = ({ initialData }: PokemonListProps) => {
  const [page, setPage] = useState(0);

  const {
    pokemons,
    pokemonByType,
    types,
    setSelectTypes,
    typesSelected,
    isLoading,
    error,
    refetch,
  } = usePokemons(page * LIMIT, LIMIT, initialData);

  const isFiltering = typesSelected?.length > 0;

  if (isLoading && !pokemons && !pokemonByType) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <EmptyState
        title="Failed to load Pokémon"
        description="Something went wrong while fetching data."
        action={
          <button
            onClick={() => refetch()}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Retry
          </button>
        }
      />
    );
  }

  if (isFiltering) {
    return (
      <PokemonListFiltered
        pokemonByType={pokemonByType ?? []}
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
