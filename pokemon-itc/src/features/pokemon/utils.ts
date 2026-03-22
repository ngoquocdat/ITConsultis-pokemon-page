import { PokemonNamedResource } from "./api/types";

export const clx = (...classes: Array<string | undefined | null | false>) =>
  classes.filter(Boolean).join(" ");

/**
 * Deduplicates an array of pokemon by name, keeping only unique entries
 * @param pokemonList - Array of pokemon objects with name property
 * @returns Array of deduplicated pokemon
 */
export const deduplicatePokemon = (pokemonList: PokemonNamedResource[]): PokemonNamedResource[] => {
  return Array.from(
    new Map(pokemonList.map((p) => [p.name, p])).values()
  );
};