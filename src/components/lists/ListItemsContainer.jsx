import React from "react";
import styles from "./lists.module.scss";
import { v4 as uuidv4 } from "uuid";

const ListItemsContainer = (props) => {
  let {
    image,
    label,
    calories,
    totalWeight,
    shareAs,
    ingredientLines,
  } = props.recipe;
  return (
    <div className={styles.listItemsContainer}>
      <img src={image} alt="" />
      <p>name:{label}</p>
      <p>calories:{calories}</p>
      <p>total weight:{totalWeight}</p>
      <a href={shareAs} target="blank">
        More detailed information
      </a>
      <br />
      ingredientLines
      {ingredientLines.map((ingredient) => (
        <ul key={uuidv4()}>
          <li>{ingredient}</li>
        </ul>
      ))}
    </div>
  );
};
export default ListItemsContainer;
