import { getPokemons } from "@path/features/pokemon/api/APIMethods/getPokemons";
import { PokemonList } from "@path/features/pokemon/components/organisms/PokemonList";

export default async function PokemonPage() {
  /**
   * SSR fetch: this runs on the server once per request and produces
   * initial HTML with preloaded Pokémon data.
   */
  const initialData = await getPokemons(0, 20);

  return (
    <main className="p-6 mx-auto">
      <h1 className="text-3xl font-bold mb-6">Pokémon</h1>

      <section className="pokemon-page-wrapper">
        <PokemonList initialData={initialData} />
      </section>
    </main>
  );
}
