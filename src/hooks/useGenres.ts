import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import useData, { FetchResponse } from "./useData";
import apiClient from "../services/apiClient";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: genres.length, results: genres },
  });
};

export default useGenres;
