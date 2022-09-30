import React, { useEffect } from "react";
import styled from "styled-components";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
        .then(res => res.json())
        .then(data => setCharacters(data.results))
  }, [])

  return (
    <Container>
      <h2></h2>
    </Container>
  );
};

const Container = styled.div``;
export default Characters;
