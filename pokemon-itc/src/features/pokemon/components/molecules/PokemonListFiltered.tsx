import { useState } from "react";
import PokemonTypes from "../atoms/PokemonTypes";
import PokemonCard from "../atoms/PokemonCard";
import PaginationControls from "../atoms/PaginationControls";

const LIMIT = 20;

type Props = {
  pokemonByType: any[];
  types: any[];
  typesSelected: string[];
  setSelectTypes: (types: string[]) => void;
  refetch: () => void;
};

export default function PokemonListFiltered({
  pokemonByType,
  types,
  typesSelected,
  setSelectTypes,
  refetch,
}: Props) {
  const [typeFilterPage, setTypeFilterPage] = useState(0);

  const startIdx = typeFilterPage * LIMIT;
  const endIdx = startIdx + LIMIT;
  const paginatedResults = pokemonByType.slice(startIdx, endIdx);
  const totalPages = Math.ceil((pokemonByType?.length ?? 0) / LIMIT);

  return (
    <div>
      <p className="mb-2 text-gray-600">Total count: {pokemonByType?.length ?? 0}</p>

      <div className="mb-2">
        <p className="mb-2 font-medium">Types:</p>
        <PokemonTypes
          types={types ?? []}
          selectedTypes={typesSelected || []}
          onChange={(types) => {
            setSelectTypes(types);
            setTypeFilterPage(0);
          }}
          refetch={refetch}
        />
      </div>

      <div className="grid grid-cols-5 gap-4 min-h-96">
        {paginatedResults?.map((p) => (
          <PokemonCard key={p.name} pokemon={p} />
        ))}
      </div>

      <PaginationControls
        currentPage={typeFilterPage}
        totalPages={totalPages}
        onPrevious={() => setTypeFilterPage((p) => Math.max(p - 1, 0))}
        onNext={() => setTypeFilterPage((p) => p + 1)}
        isDisabledPrev={typeFilterPage === 0}
        isDisabledNext={typeFilterPage >= totalPages - 1}
      />
    </div>
  );
}
