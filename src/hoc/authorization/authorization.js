import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToPropsForRedirect = (state) => ({
  initialized: state.authReducer.initialized,
});

export const withAuthRedirect = (Component) => {
  const RedirectComponent = (props) => {
    return (
      <div>
        {!props.initialized ? (
          <Redirect to={"/login"} />
        ) : (
          <Component {...props} />
        )}
      </div>
    );
  };
  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(
    RedirectComponent
  );
  return ConnectedAuthRedirectComponent;
};
