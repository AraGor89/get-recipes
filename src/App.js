import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { recipeApi } from './api/edamamAPI';
import Layout from './layout/Layout';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Main from './pages/main/Main';
import Show from './pages/show/Show';
import Search from './pages/search/Search';
import Fastfood from './pages/fastfood/FastFood';
import Tea from './pages/tea/Tea';
import Drinks from './pages/drinks/Drinks';
import Navigation from './components/navigation/Navigation';
import PrivateRoute from './hoc/authorization/authorization';

function App(props) {
  return (
    <div className="App">
      <Switch>
        <Layout>
          <Navigation />
          <Route component={Login} path="/login" exact />
          <PrivateRoute component={Show} path="/show/:id" exact />
          <PrivateRoute component={Main} path="/main" exact />
          <PrivateRoute component={Search} path="/search" exact />
          <PrivateRoute component={Fastfood} path="/fastfood" exact />
          <PrivateRoute component={Tea} path="/tea" exact />
          <PrivateRoute component={Drinks} path="/drinks" exact />
          <PrivateRoute component={Home} path="/" exact />
        </Layout>
      </Switch>
    </div>
  );
}

export default App;