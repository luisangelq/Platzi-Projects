import { useEffect, useState } from "react";

const useFetch = (route) => {
  const [categories, setCategories] = useState([]);

  const URL = "https://petgram-server-luis-f5pu4hs2i-luisangelq.vercel.app";
  
  useEffect(async () => {
    try {
      const response = await fetch(`${URL}/${route}`);
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return { categories };
};

export { useFetch };
