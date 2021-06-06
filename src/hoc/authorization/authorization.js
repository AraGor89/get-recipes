import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuth = useSelector((state) => state?.isAuth?.isAuth);

  return (
    <Route {...rest} render={props => (
      // isLogin() ?
      isAuth ?
        <Component {...props} />
        : <Redirect to="/login" />
    )} />
  );
};

export default PrivateRoute;