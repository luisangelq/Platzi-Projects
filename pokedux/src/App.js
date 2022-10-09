import { useEffect } from "react";

import styled from "styled-components";
import { Col } from "antd";
import logo from "./static/logo.svg";
import PokemonList from "./components/PokemonList";
import Searcher from "./components/Searcher";

import { getPokemons } from "./api";

import { useDispatch, useSelector } from "react-redux";
import { setPokemons } from "./actions";

function App() {
 const pokemons = useSelector(state =>  state.pokemons)
 const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const res = await getPokemons();

      dispatch(setPokemons(res.results));
    };

    fetchPokemons();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      <Col span={10} offset={7}>
        <Logo src={logo} alt="logo" />
      </Col>
      <Col span={12} offset={6}>
        <Searcher />
      </Col>

      <PokemonList pokemons={pokemons} />
    </Container>
  );
}

const Container = styled.div`
  margin-top: 3rem;
`;
const Logo = styled.img`
  margin-bottom: 3rem;
`;

// const mapStateToProps = (state) => ({
//   pokemons: state.pokemons,
// });

// const mapDispatchToProps = (dispatch) => ({
//   setPokemons: (value) => dispatch(setPokemonsAction(value)),
// });

export default App;
