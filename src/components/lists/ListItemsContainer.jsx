import React, { useState } from "react";
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
  let [toggle, setToggle] = useState(false);
  return (
    <div className={styles.listItemsContainer}>
      <div className={styles.mealImageContainer}>
        <img src={image} alt="mealImage" />
      </div>
      <div className={styles.mealIngredientsContainer}>
        <p>name:{label}</p>
        <p>calories:{calories}</p>
        <p>total weight:{totalWeight}</p>
        {toggle && (
          <div>
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
        )}
        <button onClick={() => setToggle(!toggle)}>
          {toggle ? "hide" : "show"} details
        </button>
      </div>
    </div>
  );
};
export default ListItemsContainer;
