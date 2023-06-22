import { createSlice } from "@reduxjs/toolkit";
import {
  PokemonTypeInitialState,
  generatedPokemonType,
} from "../../utils/Type";
import { getInitialPokemonData } from "../reducers/getInitialPokemonData";
import { getPokemonData } from "../reducers/getPokemonData";
import { stat } from "fs";

const initialState: PokemonTypeInitialState = {
  allPokemon: undefined,
  randomPokemons: undefined,
  compareQueue: [],
};

export const PokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addToCompare: (state, action) => {
      const index = state.compareQueue.findIndex(
        (pokemon: generatedPokemonType) => pokemon.id === action.payload.id
      );
      if (index === -1) {
        if (state.compareQueue.length === 2) {
          state.compareQueue.pop();
        }
        state.compareQueue.unshift(action.payload);
      }
    },
    removeFromCompare: (state, action) => {
      const index = state.compareQueue.findIndex(
        (pokemon: generatedPokemonType) => pokemon.id === action.payload.id
      );
      const queue = [...state.compareQueue];
      queue.slice(index, 1);
      state.compareQueue = queue;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getInitialPokemonData.fulfilled, (state, action) => {
      state.allPokemon = action.payload;
    });
    builder.addCase(getPokemonData.fulfilled, (state, action) => {
      state.randomPokemons = action.payload;
    });
  },
});
export const { addToCompare, removeFromCompare } = PokemonSlice.actions;

export default PokemonSlice.reducer;
