import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { useLocation } from "react-router-dom";
import NavBar from "./../navigation/Navbar";
import Search from "./../search/Search";
import style from "./header.module.scss";

import {
  mealNameChangeAC,
  getRecipesTHUNK,
} from "./../../redux/reducers/mainReducer";
const Header = (props) => {
  let location = useLocation().pathname;
  let isOwnRecipeLocation = location === "/ownRecipe" ? true : false;
  return (
    <div
      className={`${style.headerContainer} ${
        isOwnRecipeLocation ? `${style.ownRecipebg}` : ""
      }`}
    >
      <NavBar />
      {!isOwnRecipeLocation && <Search {...props} />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  mealName: state.mainReducer.mealName,
  initialized: state.authReducer.initialized,
});

export default compose(
  connect(mapStateToProps, { mealNameChangeAC, getRecipesTHUNK })
)(Header);
