import React from "react";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { compose } from "redux";
import style from "./lists.module.scss";
import ListItemsContainer from "./ListItemsContainer";
import Pagination from "./../pagination/Pagination";
import { getRecipesTHUNK } from "./../../redux/reducers/mainReducer";

const Lists = ({ recipes, getRecipesTHUNK, fromItem, toItem, moreResults }) => {
  return (
    <div className={style.listsContainer}>
      {recipes &&
        recipes.map((recipe) => (
          <ListItemsContainer recipe={recipe.recipe} key={uuidv4()} />
        ))}
      <Pagination
        recipes={recipes}
        getRecipesTHUNK={getRecipesTHUNK}
        moreResults={moreResults}
        toItem={toItem}
        fromItem={fromItem}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  fromItem: state.mainReducer.fromItem,
  toItem: state.mainReducer.toItem,
  moreResults: state.mainReducer.moreResults,
  recipes: state.mainReducer.mealResultArray,
});

export default compose(connect(mapStateToProps, { getRecipesTHUNK }))(Lists);
