import React, { useState, useEffect } from "react";

import { Category } from "../Category";
import { List } from "./styles";

import { onScrollForCategories } from "../../helpers/onScrollForCategories";
import { useFetch } from "../../hooks/useApi";

const ListOfCategories = () => {
  const { categories } = useFetch("categories");
  const [fixedCategory, setFixedCategory] = useState(true);

  useEffect(() => {
    onScrollForCategories(setFixedCategory);
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
