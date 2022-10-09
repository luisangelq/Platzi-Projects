import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons }) => {
  return (
    <Container>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} name={pokemon.name}/>
      ))}
    </Container>
  );
};

PokemonList.defaultProps = {
  pokemons: Array(10).fill(""),
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin: 2rem;
`;

export default PokemonList;
