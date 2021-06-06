import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { useLocation } from "react-router-dom";
import NavBar from "./../navigation/Navbar";
import Search from "./../search/Search";
import style from "./header.module.scss";
import headerMainimg from "../../assets/images/Restaurant-Instagram-Photography.png";
import headerOwnimg from "../../assets/images/ownPage.jpg";

import {
  mealNameChangeAC,
  getRecipesTHUNK,
} from "./../../redux/reducers/mainReducer";
const Header = (props) => {
  let location = useLocation().pathname;
  let isOwnRecipeLocation = location === "/ownRecipe";
  let isMainLocation = location === "/main";
  return (
    <div className={style.headerContainer}>
      <img src={headerMainimg} alt="headerMainimg" />
      {isMainLocation && <img src={headerMainimg} alt="headerMainimg" />}
      {isOwnRecipeLocation && <img src={headerOwnimg} alt="headerOwnimg" />}
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
