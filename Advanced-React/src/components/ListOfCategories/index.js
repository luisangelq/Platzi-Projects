import React, { useState } from "react";

import { Category } from "../Category";

import { List } from "./styles";
import db from "../../../api/db.json";

const ListOfCategories = () => {
  const [categories, setCategories] = useState(db.categories);

  return (
    <List>
      {categories.map((category) => (
        <li key={category.id}>
          <Category {...category} />
        </li>
      ))}
    </List>
  );
};
export { ListOfCategories };
