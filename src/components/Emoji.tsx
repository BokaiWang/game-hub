import BullsEye from "../assets/bulls-eye.webp";
import ThumbsUp from "../assets/thumbs-up.webp";
import Meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface EmojiProps {
  rating: number;
}

const Emoji = ({ rating }: EmojiProps) => {
  if (rating < 3) {
    return null;
  }
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: Meh, alt: "meh" },
    4: { src: ThumbsUp, alt: "recommended" },
    5: { src: BullsEye, alt: "exceptional", boxSize: "35px" },
  };
  return <Image boxSize={"25px"} {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
