import axios from 'axios';
import { PokemonListResponse } from '../types';
import { ApiRoutes } from '../APIroutes';
export const getPokemons = async (
  offset: number = 0,
  limit: number = 20
): Promise<PokemonListResponse> => {
  try {
    const res = await axios.get(ApiRoutes.getPokemons, {
      params: {
        offset,
        limit,
      },
    });

    return res.data;
  } catch (error) {
    console.error('Error fetching pokemons:', error);
    throw error;
  }
};