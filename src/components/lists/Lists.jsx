import React from "react";
import style from "./lists.module.scss";
import ListItemsContainer from "./ListItemsContainer";
import { v4 as uuidv4 } from "uuid";

const Lists = ({ recipes }) => {
  console.log(recipes);
  return (
    <div className={style.listsContainer}>
      {recipes &&
        recipes.map((recipe) => (
          <ListItemsContainer recipe={recipe.recipe} key={uuidv4()} />
        ))}
    </div>
  );
};

export default Lists;
