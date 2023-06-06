import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platform";
import apiClient, { FetchResponse } from "../services/apiClient";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms },
  });
};

export default usePlatform;
