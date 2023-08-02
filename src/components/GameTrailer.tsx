import useTrailers from "../hooks/useTrailers";

interface GameTrailerProps {
  gameId: number;
}

const GameTrailer = ({ gameId }: GameTrailerProps) => {
  const { data, isLoading, error } = useTrailers(gameId);
  if (isLoading) {
    return null;
  }
  if (error) {
    throw error;
  }
  const firstTrailer = data?.results[0];
  if (!firstTrailer) {
    return null;
  }

  return (
    <video src={firstTrailer.data[480]} poster={firstTrailer.preview} controls>
      GameTrailer
    </video>
  );
};

export default GameTrailer;
