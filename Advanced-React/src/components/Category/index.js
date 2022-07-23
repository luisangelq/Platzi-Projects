import React from "react";

import { Anchor, Image } from "./styles";

const Category = ({ cover, path, emoji}) => {
  return (
    <Anchor href={path}>
      <Image src={cover} alt="Category Image Item" />
      {emoji}
    </Anchor>
  );
};

export { Category };
