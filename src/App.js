import React from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "./components/auth/Auth";
import Main from "./components/main/Main";
import OwnRecipe from "./components/own/OwnRecipe";
import "./App.css";
import Header from "./components/header/Header";
import { connect } from "react-redux";

function App(props) {
  return (
    <div className="App">
      {props.initialized ? <Header /> : <Auth />}
      <Switch>
        {/* <Route path="/login" component={() => <Auth />} /> */}
        <Route path="/main" component={() => <Main />} />
        <Route path="/ownRecipe" component={() => <OwnRecipe />} />
      </Switch>
    </div>
  );
}
const mapStateToProps = (state) => ({
  initialized: state.authReducer.initialized,
  // login: state.authReducer.login,
  // password: state.authReducer.password,
  // falseAttemptsCount: state.authReducer.falseAttemptsCount,
});
export default connect(mapStateToProps, {})(App);
