const setPokemons = (payload) => {
  return {
    type: "SET_POKEMONS",
    payload,
  };
};

export { setPokemons };
