export interface AppTypeInitialState {
  isLoading: boolean;
  toasts: string[];
  userInfo: undefined | { email: string };
  currentPokemonTab: string;
}

export interface currentPokemonType {
  id: number;
  name: string;
  types: pokemonTypeInterface[];
  image: string;
  stats: pokemonStatsType[];
  encounters: string[];
  evolution: { level: number; pokemon: { name: string; url: string } }[];
  pokemonAbilities: { abilities: string[]; moves: string[] };
  evolutionLevel: number;
}

export interface PokemonTypeInitialState {
  allPokemon: undefined | genericPokeMonType[];
  randomPokemons: undefined | generatedPokemonType[];
  compareQueue: generatedPokemonType[];
  userPokemons: userPokemonsType[];
  currentPokemon: currentPokemonType | undefined;
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
  // value: number;
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
