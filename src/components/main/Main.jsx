import React from "react";
import style from "./main.module.scss";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/authorization/authorization";
import Lists from "./../lists/Lists";
import { getRecipesTHUNK } from "./../../redux/reducers/mainReducer";
import NoResult from "./../noResult/NoResult";
import Loading from "./../loading/Loading";

const Main = ({ count, isFetching }) => {
  if (count === 0) return <NoResult />;
  return (
    <div className={style.mainContainer}>
      {isFetching ? <Loading /> : <Lists />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isFetching: state.mainReducer.isFetching,
  count: state.mainReducer.count,
});

export default compose(
  connect(mapStateToProps, { getRecipesTHUNK }),
  withAuthRedirect
)(Main);
