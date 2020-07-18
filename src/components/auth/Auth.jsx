import React, { useEffect } from "react";
import style from "./auth.module.scss";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { validateLogin } from "./../validation/validation";
import {
  loginAC,
  passwordAC,
  loginSubmitAC,
  incrementFalseAttemptsAC,
} from "../../redux/reducers/authReducer";

const Auth = (props) => {
  useEffect(() => {
    if (props.falseAttemptsCount === 3) {
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  }, [props.falseAttemptsCount]);
  if (props.initialized) {
    return <Redirect to={"/main"} />;
  }
  const handleLoginChange = (e) => {
    props.loginAC(e.target.value);
  };
  const handlePasswordChange = (e) => {
    props.passwordAC(e.target.value);
  };
  const handleLoginSubmit = () => {
    validateLogin(
      props.login,
      props.password,
      props.loginSubmitAC,
      props.incrementFalseAttemptsAC
    );
    props.loginAC("");
    props.passwordAC("");
  };

  return (
    <div className={style.authContainer}>
      <input type="text" value={props.login} onChange={handleLoginChange} />
      <input
        type="password"
        value={props.password}
        onChange={handlePasswordChange}
      />
      <button
        onClick={handleLoginSubmit}
        disabled={props.falseAttemptsCount === 3}
      >
        Log in
      </button>
      <div>
        <h3>
          <b>Login:</b> "Bon"
        </h3>
        <h3>
          <b>Password:</b> "appetit"
        </h3>
      </div>
      {props.falseAttemptsCount === 3 && <h1>WRONG LOGIN OR PASSWORD</h1>}
    </div>
  );
};

const mapStateToProps = (state) => ({
  initialized: state.authReducer.initialized,
  login: state.authReducer.login,
  password: state.authReducer.password,
  falseAttemptsCount: state.authReducer.falseAttemptsCount,
});
export default connect(mapStateToProps, {
  loginAC,
  passwordAC,
  loginSubmitAC,
  incrementFalseAttemptsAC,
})(Auth);

///http://www.recipepuppy.com/about/api/
///http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3
