import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuth = useSelector((state) => state?.isAuth?.isAuth);
  const isAuthLS = localStorage.getItem("isAuth");

  return (
    <Route
      {...rest}
      render={(props) => (
        // isAuthorized ? <Component {...props} /> : <Redirect to="/login" />
        <Component {...props} />
      )}
    />
  );
};

export default PrivateRoute;
