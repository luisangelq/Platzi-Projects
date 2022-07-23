import React from "react";
import { MdFavoriteBorder } from "react-icons/md";

import { ImgWrapper, Img, Button } from "./styles";

const PhotoCard = ({ id, likes = 0, src }) => {
  return (
    <article>
      <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Img src={src} alt="" />
        </ImgWrapper>
      </a>

      <Button>
        <MdFavoriteBorder />
        {likes} likes!
      </Button>
    </article>
  );
};

export { PhotoCard };
