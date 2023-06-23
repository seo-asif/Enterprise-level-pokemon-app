import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  pokemonStatsType,
  pokemonTypeInterface,
  userPokemonsType,
} from "../../utils/Type";
import { RootState } from "../store";
import { setToast } from "../slices/AppSlice";
import { addDoc } from "firebase/firestore";
import { pokemonListRef } from "../../utils/FirebaseConfig";
export const addPokemonToList = createAsyncThunk(
  "pokemon/addPokemon",
  async (
    pokemon: {
      id: number;
      name: string;
      types: pokemonTypeInterface[] | string[];
      stats?: pokemonStatsType;
    },
    { getState, dispatch }
  ) => {
    try {
      const {
        app: { userInfo },
        pokemon: { userPokemons },
      } = getState() as RootState;

      if (!userInfo?.email) {
        return dispatch(
          setToast("Please Login in order to add pokemon to your collection.")
        );
      }

      const index = userPokemons.findIndex((userPokemon: userPokemonsType) => {
        return userPokemon.name === pokemon.name;
      });

      if (index === -1) {
        let types = pokemon.types as string[];

        await addDoc(pokemonListRef, {
          pokemon: { id: pokemon.id, name: pokemon.name, types },
          email: userInfo.email,
        });
        //await dispatch(getUserPokemons())
        return dispatch(setToast(`${pokemon.name} added to your collection`));
      } else {
        return dispatch(
          setToast(`${pokemon.name} already part of your collection`)
        );
      }
    } catch (error) {
      console.log(error);
    }
  }
);
