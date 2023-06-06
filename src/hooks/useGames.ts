import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { FetchResponse } from "../services/apiClient";
import APIClient from "../services/apiClient";
import { Platform } from "./usePlatforms";
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new APIClient<Game>("/games");

const useGames = (gameQuery: GameQuery) => {
  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
    staleTime: 60 * 60 * 1000,
  });
};

export default useGames;
