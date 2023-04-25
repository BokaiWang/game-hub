import { Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import apiClient from "../assets/apiClient";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then(({ data }) => setGames(data.results))
      .catch((err) => setError(err.message));
  }, []);
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;