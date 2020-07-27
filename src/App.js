import React from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "./components/auth/Auth";
import Main from "./components/main/Main";
import OwnRecipe from "./components/own/OwnRecipe";
import { connect } from "react-redux";
import "./App.css";
import Header from "./components/header/Header";

function App(props) {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/login" component={() => <Auth />} />
        <Route path="/main" component={() => <Main />} />
        <Route path="/ownRecipe" component={() => <OwnRecipe />} />
      </Switch>
    </div>
  );
}

// const mapStateToProps = (state) => ({
//   initialized: state.authReducer.initialized,
// });
// export default connect(mapStateToProps)(App);

export default App;
