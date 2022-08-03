import React, { useEffect, useRef, useState } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

import { Article, ImgWrapper, Img, Button } from "./styles";

import { useScrollIntersection } from "../../hooks/useScroll";

const PhotoCard = ({ id, likes = 0, src }) => {
  const [liked, setLiked] = useState(false);

  const element = useRef(null);
  const { show } = useScrollIntersection(element);

  return (
    <Article ref={element}>
      {show && (
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt="" />
            </ImgWrapper>
          </a>

          <Button onClick={() => setLiked(!liked)}>
            {liked ? (
              <MdFavorite style={{ color: "#ED4956" }} />
            ) : (
              <MdFavoriteBorder />
            )}
            {likes} likes!
          </Button>
        </>
      )}
    </Article>
  );
};

export { PhotoCard };
