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
  return (
    <div className={style.mainContainer}>
      <Lists recipes={props.mealResultArray} />
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
