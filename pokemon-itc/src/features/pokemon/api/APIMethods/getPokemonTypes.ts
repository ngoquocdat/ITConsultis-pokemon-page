import axios from "axios";
import { ApiRoutes } from "../APIroutes";
import { PokemonTypeDetail } from "../types";

export interface PokemonType {
  name: string;
  url: string;
}

export interface TypesResponse {
  results: PokemonType[];
}

export const getTypes = async (): Promise<PokemonType[]> => {
  const res = await axios.get(ApiRoutes.getPokemonTypes);
  return res.data.results;
};

export const getPokemonByType = async (
  type: string | null,
  offset: number = 0,
  limit: number = 20
): Promise<PokemonTypeDetail> => {
  const res = await axios.get(
    `${ApiRoutes.getPokemonTypes}${type ? `/${type}` : ""}`,
    {
      params: {
        offset,
        limit,
      },
    }
  );
  return res.data;
};
