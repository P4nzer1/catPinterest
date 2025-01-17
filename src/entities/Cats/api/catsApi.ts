import axios from "axios";

import { BASE_URL } from "@/shared/api/constants";
import { DEFAULT_PARAMS } from "../lib/constants";
import { GetCatsParams, Cats} from "../lib/types";

export const getCats = async (params: GetCatsParams = DEFAULT_PARAMS): Promise<Cats[]> => {
  const response = await axios.get(`${BASE_URL}/images/search`, { params });
  return response.data;
};
