import { Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";

interface ExpandableTextProps {
  children: string;
}

const ExpandableText = ({ children }: ExpandableTextProps) => {
  const [expanded, setExpanded] = useState(false);
  const LIMIT = 300;
  const onClick = () => setExpanded(!expanded);

  if (!children) {
    return null;
  }

  if (children.length <= LIMIT) {
    return <Text>{children}</Text>;
  }

  const textToDisplay = expanded
    ? children
    : children.substring(0, LIMIT) + "...";

  return (
    <Text>
      {textToDisplay}
      <Button
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        marginLeft={1}
        onClick={onClick}
      >
        {expanded ? "Show less" : "Read more"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
