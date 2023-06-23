export interface AppTypeInitialState {
  toasts: string[];
  userInfo: undefined | { email: string };
}

export interface PokemonTypeInitialState {
  allPokemon: undefined | genericPokeMonType[];
  randomPokemons: undefined | generatedPokemonType[];
  compareQueue: generatedPokemonType[];
  userPokemons: userPokemonsType[];
}

export interface genericPokeMonType {
  name: string;
  url: string | undefined;
}

export interface generatedPokemonType {
  name: string;
  id: number;
  image: string;
  types: pokemonTypeInterface[];
}

export interface pokemonTypeInterface {
  [key: string]: {
    image: string;
    resistance: string[];
    strength: string[];
    weakness: string[];
    vulnerable: string[];
  };
}

export interface pokemonStatsType {
  name: string;
  value: string;
}

export interface userPokemonsType extends generatedPokemonType {
  firebaseId?: string;
  image: string;
}

export type pokemonStatType =
  | "vulnerable"
  | "weakness"
  | "strength"
  | "resistance";

export type pokemonElementType =
  | "bug"
  | "dark"
  | "dragon"
  | "electric"
  | "fairy"
  | "fighting"
  | "fire"
  | "flying"
  | "ghost"
  | "grass"
  | "ground"
  | "ice"
  | "normal"
  | "poison"
  | "psychic"
  | "rock"
  | "steel"
  | "water";
