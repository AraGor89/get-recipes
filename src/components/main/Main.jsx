import React from "react";
import style from "./main.module.scss";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/authorization/authorization";
import Lists from "./../lists/Lists";
import {
  mealNameChangeAC,
  getRecipesTHUNK,
} from "./../../redux/reducers/mainReducer";

const Main = (props) => {
  const handleNameChange = (e) => {
    props.mealNameChangeAC(e.target.value);
  };
  const handleMealSearch = () => {
    if (props.mealName) {
      props.getRecipesTHUNK();
      props.mealNameChangeAC("");
    }
  };
  return (
    <div className={style.mainContainer}>
      <div className={style.searchContainer}>
        <input
          type="text"
          value={props.mealName}
          onChange={handleNameChange}
          placeholder="You look hungry"
        />
        <button onClick={handleMealSearch}> HUNT </button>
      </div>
      <div className={style.listsContainer}>
        <Lists recipes={props.mealResultArray} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  mealName: state.mainReducer.mealName,
  mealResultArray: state.mainReducer.mealResultArray,
});

export default compose(
  connect(mapStateToProps, { mealNameChangeAC, getRecipesTHUNK }),
  withAuthRedirect
)(Main);
