import { PokemonList } from "@path/features/pokemon/components/organisms/PokemonList";

export default function Page() {
  return (
    <main className="p-6 mx-auto">
      <h1 className="text-3xl font-bold mb-6">Pokémon</h1>
      <PokemonList />
    </main>
  );
}