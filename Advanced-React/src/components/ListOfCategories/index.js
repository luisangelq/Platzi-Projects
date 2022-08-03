import React, { useState, useEffect } from "react";

import { Category } from "../Category";
import { List } from "./styles";


import { useFetch } from "../../hooks/useApi";
import { useScroll } from "../../hooks/useScroll";

const ListOfCategories = () => {
  const { categories } = useFetch("categories");
  const { fixedCategory } = useScroll();
  
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
