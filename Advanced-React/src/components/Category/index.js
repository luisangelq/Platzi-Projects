import React from "react";

import { Anchor, Image } from "./styles";

const DefaultImage =
  "https://res.cloudinary.com/dcymtnoka/image/upload/v1658256550/Petgram-App/Pishi_nkvjkt.jpg";

const Category = ({ cover = DefaultImage, path, emogi = "?" }) => {
  return (
    <Anchor href={path}>
      <Image src={cover} alt="Category Image Item" />
      {emogi}
    </Anchor>
  );
};

export { Category };
