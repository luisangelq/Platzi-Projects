import React, { useState, useEffect } from "react";

import { Category } from "../Category";
import { List } from "./styles";

const ListOfCategories = () => {
  const [categories, setCategories] = useState([]);
  const [fixedCategory, setFixedCategory] = useState(true);

  const URL = "https://petgram-server-luis-f5pu4hs2i-luisangelq.vercel.app";

  useEffect(() => {
    try {
      const fetchCategories = async () => {
        const response = await fetch(`${URL}/categories`);
        const data = await response.json();
        setCategories(data);
      };

      fetchCategories();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <List className={fixedCategory ? "fixed" : null}>
      {categories?.map((category) => (
        <li key={category.id}>
          <Category {...category} />
        </li>
      ))}
    </List>
  );
};
export { ListOfCategories };
