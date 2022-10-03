import React, { useReducer, useState, useMemo, useRef, useCallback } from "react";
import styled from "styled-components";
import useCharacters from "../hooks/useCharacter";

import Search from "./Search";

const initialState = {
  favorites: [],
};

const API = "https://rickandmortyapi.com/api/character"

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};


const Characters = () => {
  const [favorites, dispatch] = useReducer(favoritesReducer, initialState);
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);

  const characters = useCharacters(API)

  const addFavorite = (fav) => {
    dispatch({
      type: "ADD_TO_FAVORITE",
      payload: fav,
    });
  };

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value)
  }, [])

  const filteredCharacter = useMemo(
    () =>
      characters.filter((character) => {
        return character.name.toLowerCase().includes(search.toLowerCase());
      }),
    [characters, search]
  );

  return (
    <Container>
      {favorites.favorites.map((fav) => (
        <li key={fav.id}>{fav.name}</li>
      ))}

      <Search 
        search={search}
        searchInput={searchInput}
        handleSearch={handleSearch}
      />

      {filteredCharacter.map((character) => (
        <Card key={character.id}>
          <h2>{character.name}</h2>
          <button onClick={() => addFavorite(character)}>Add Favorite</button>
        </Card>
      ))}
    </Container>
  );
};

const Container = styled.div``;



const Card = styled.div``;
export default Characters;
