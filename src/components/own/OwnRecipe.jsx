import React from "react";
import style from "./ownRecipe.module.scss";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/authorization/authorization";
import { compose } from "redux";

const OwnRecipe = (props) => {
  return <div className={style.ownRecipe}>own recipe</div>;
};

const mapStateToProps = (state) => ({});

export default compose(
  connect(mapStateToProps, {}),
  withAuthRedirect
)(OwnRecipe);
