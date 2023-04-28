import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

export interface PlatForm {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: PlatForm }[];
  metacritic: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then(({ data }) => {
        setGames(data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) {
          setIsLoading(false);
          return;
        }
        setError(err.message);
        setIsLoading(false);
      });
    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
};

export default useGames;
