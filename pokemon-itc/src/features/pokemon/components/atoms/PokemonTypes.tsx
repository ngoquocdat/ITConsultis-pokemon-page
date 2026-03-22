type Props = {
  types: any[];
  selectedTypes: string[];
  onChange: (types: string[]) => void;
  refetch: () => void;
};

export default function PokemonTypes({
  types,
  selectedTypes,
  onChange,
  refetch,
}: Props) {
  const toggleType = (type: string) => {
    if (selectedTypes.includes(type)) {
      onChange(selectedTypes.filter((t) => t !== type));
    } else {
      onChange([...selectedTypes, type]);
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => {
          onChange([]);
          refetch();
        }}
        className={`px-3 py-1 border rounded ${
          selectedTypes.length === 0 ? "bg-blue-500 text-white" : "bg-white"
        }`}
      >
        All
      </button>

      {(types as any[] | undefined)
        ?.filter((t) => t.name !== "shadow")
        .map((type) => (
          <button
            key={type.name}
            onClick={() => toggleType(type.name)}
            className={`px-3 py-1 border rounded capitalize transition
              ${
                selectedTypes.includes(type.name)
                  ? "bg-blue-500 text-white"
                  : "bg-white hover:bg-gray-100"
              }`}
          >
            {type.name}
          </button>
        ))}
    </div>
  );
}
