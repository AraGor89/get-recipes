import React from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "./components/auth/Auth";
import Main from "./components/main/Main";
import NavBar from "./components/navigation/Navbar";
import OwnRecipe from "./components/own/OwnRecipe";
//import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/main" component={() => <Main />} />
        <Route path="/login" component={() => <Auth />} />
        <Route path="/ownRecipe" component={() => <OwnRecipe />} />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => ({
  initialized: state.authReducer.initialized,
});
export default connect(mapStateToProps)(App);
