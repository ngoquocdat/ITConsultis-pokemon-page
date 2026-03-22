import { useState } from "react";
import PokemonTypes from "../atoms/PokemonTypes";
import PokemonCard from "../atoms/PokemonCard";
import PokemonCardSkeleton from "../atoms/PokemonCardSkeleton";
import PaginationControls from "../atoms/PaginationControls";

const LIMIT = 20;

type Props = {
  pokemons: any;
  types: any[];
  typesSelected: string[];
  isLoading: boolean;
  setSelectTypes: (types: string[]) => void;
  onPageChange: (page: number) => void;
  currentPage: number;
  refetch: () => void;
};

export default function PokemonListAll({
  pokemons,
  types,
  typesSelected,
  isLoading,
  setSelectTypes,
  onPageChange,
  currentPage,
  refetch,
}: Props) {
  const totalPages = pokemons?.count ? Math.ceil(pokemons.count / LIMIT) : 0;

  return (
    <div>
      <p className="mb-1 text-gray-600">Total count: {pokemons?.count ?? 0}</p>

      <div className="mb-2">
        <p className="mb-2 font-medium">Types:</p>
        <PokemonTypes
          types={types ?? []}
          selectedTypes={typesSelected || []}
          onChange={(types) => {
            setSelectTypes(types);
            onPageChange(0);
          }}
          refetch={refetch}
        />
      </div>

      <div className="grid grid-cols-5 gap-4 min-h-96">
        {isLoading ? (
          Array.from({ length: LIMIT }).map((_, i) => (
            <PokemonCardSkeleton key={`skeleton-${i}`} />
          ))
        ) : (
          pokemons?.results?.map((p: any) => (
            <PokemonCard key={p.name} pokemon={p} />
          ))
        )}
      </div>

      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevious={() => onPageChange(Math.max(currentPage - 1, 0))}
        onNext={() => onPageChange(currentPage + 1)}
        isDisabledPrev={currentPage === 0}
        isDisabledNext={currentPage >= totalPages - 1}
      />
    </div>
  );
}
