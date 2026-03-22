export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  count: number;
  results: Pokemon[];
}

export interface PokemonNamedResource {
  name: string;
  url: string;
}

export interface DamageRelations {
  double_damage_from: PokemonNamedResource[];
  double_damage_to: PokemonNamedResource[];
  half_damage_from: PokemonNamedResource[];
  half_damage_to: PokemonNamedResource[];
  no_damage_from: PokemonNamedResource[];
  no_damage_to: PokemonNamedResource[];
}

export interface GameIndex {
  game_index: number;
  generation: PokemonNamedResource;
}

export interface TypeName {
  name: string;
  language: PokemonNamedResource;
}

export interface TypePokemon {
  pokemon: PokemonNamedResource;
  slot: number;
}

export interface TypeSprites {
  [generation: string]: {
    [game: string]: {
      name_icon: string | null;
      symbol_icon: string | null;
    };
  };
}

export interface PokemonTypeDetail {
  id: number;
  name: string;
  damage_relations: DamageRelations;
  game_indices: GameIndex[];
  generation: PokemonNamedResource;
  move_damage_class: PokemonNamedResource;
  moves: PokemonNamedResource[];
  names: TypeName[];
  past_damage_relations: unknown[];
  pokemon: TypePokemon[];
  sprites: TypeSprites;
}
