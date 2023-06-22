export interface AppTypeInitialState {}
export interface PokemonTypeInitialState {
  allPokemon: undefined | genericPokeMonType[];
  randomPokemons: undefined | generatedPokemonType[];
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
