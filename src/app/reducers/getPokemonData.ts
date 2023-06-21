//@ts-nocheck
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { defaultImages, images } from "../../utils/getPokemonImages";
import { generatedPokemonType, genericPokeMonType } from "../../utils/types";

import { pokemonTypes } from "../../utils/getPokemonTypes";

export const getPokemonData = createAsyncThunk(
  "pokemon/randomPokemon",
  async (pokemons: genericPokeMonType[]) => {
    try {
      const pokemonsData: generatedPokemonType[] = [];

      for await (const pokemon of pokemons) {
        const {
          data,
        }: {
          data: {
            id: number;
            types: { type: generatedPokemonType }[];
          };
        } = await axios.get(pokemon.url);

        const types = data.types.map(
          ({ type: { name } }: { type: { name: string } }) => ({
            [name]: pokemonTypes[name],
          })
        );

        let image: string = images[data.id];

        if (!image) {
          image = defaultImages[data.id];
        }

        if (image) {
          pokemonsData.push({
            name: pokemon.name,
            id: data.id,
            image,
            types,
          });
        }
      }
      return pokemonsData;
    } catch (error) {
      console.error(error);
    }
  }
);
