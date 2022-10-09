import axios from "axios";

const URL = "https://pokeapi.co/api/v2/pokemon";

const getPokemons = async () => {
  try {
    const result = await axios.get(URL);

    return result.data
  } catch (error) {
    console.log(error);
  }
};

export { getPokemons };
