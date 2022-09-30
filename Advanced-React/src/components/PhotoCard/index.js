import React, { useEffect, useRef, useState } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

import { Article, ImgWrapper, Img, Button } from "./styles";

import { useScrollIntersection } from "../../hooks/useScroll";

const PhotoCard = ({ id, likes = 0, src }) => {
  const key = `like-${id}`
  const [liked, setLiked] = useState(() => {
    try {
      const like = window.localStorage.getItem(key);
      return like;
    } catch (error) {
      console.log(error); 
      return false
    }
  });

  console.log(liked);

  const setLocalStrorage = (value) => {
    try {
      window.localStorage.setItem(key, value);
      setLiked(value);
    } catch (error) {
      console.log(error);
    }
  };

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

          <Button onClick={() => setLocalStrorage(!liked)}>

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
