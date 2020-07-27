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
        <h2> {label}</h2>
        <hr />
        <p>
          <strong>calories:</strong> {calories}
        </p>
        <p>
          {" "}
          <strong>weight:</strong> {totalWeight}
        </p>
        {toggle && (
          <div>
            <a href={shareAs} target="blank">
              More detailed information
            </a>
            <br />
            <strong> ingredients</strong>
            {ingredientLines.map((ingredient) => (
              <ul key={uuidv4()}>
                <li>{ingredient}</li>
              </ul>
            ))}
          </div>
        )}
        <hr />
        <button onClick={() => setToggle(!toggle)}>
          {toggle ? "hide" : "show"} details
        </button>
      </div>
    </div>
  );
};
export default ListItemsContainer;
