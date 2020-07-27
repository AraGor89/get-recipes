import React from "react";
import NavBar from "./../navigation/Navbar";
import Search from "./../search/Search";
import style from "./header.module.scss";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  mealNameChangeAC,
  getRecipesTHUNK,
} from "./../../redux/reducers/mainReducer";
const Header = (props) => {
  return (
    <div className={style.headerContainer}>
      <NavBar />
      {props.initialized && <Search {...props} />}
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
