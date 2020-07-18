import React from "react";
import style from "./main.module.scss";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/authorization/authorization";
import {
  mealNameChangeAC,
  getRecipesTHUNK,
} from "./../../redux/reducers/mainReducer";

const Main = (props) => {
  console.log(props.setMealResultArray);
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
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  mealName: state.mainReducer.mealName,
  setMealResultArray: state.mainReducer.setMealResultArray,
});

export default compose(
  connect(mapStateToProps, { mealNameChangeAC, getRecipesTHUNK }),
  withAuthRedirect
)(Main);
