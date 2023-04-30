import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const onSelectedGenre = (genre: Genre) =>
    setGameQuery({ ...gameQuery, genre });
  const onSelectedPlatform = (platform: Platform) =>
    setGameQuery({ ...gameQuery, platform });
  const onSelectSortOrder = (sortOrder: string) =>
    setGameQuery({ ...gameQuery, sortOrder });
  const onSearch = (searchText: string) =>
    setGameQuery({ ...gameQuery, searchText });

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar onSearch={onSearch} />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenreList
            onSelectedGenre={onSelectedGenre}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector
                onSelectedPlatform={onSelectedPlatform}
                selectedPlatform={gameQuery.platform}
              />
            </Box>
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={onSelectSortOrder}
            />
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
