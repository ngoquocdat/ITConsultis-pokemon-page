export default function PokemonCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center animate-pulse">
      <div className="w-20 h-20 bg-gray-300 rounded-lg" />
      <div className="mt-2 w-24 h-4 bg-gray-300 rounded" />
    </div>
  );
}
