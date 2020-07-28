import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { validateLogin } from "./../validation/validation";
import style from "./auth.module.scss";
import logImage from "../../assets/images/logImage.jpg";
import Warning from "./Warning";

import {
  loginAC,
  passwordAC,
  loginSubmitAC,
  incrementFalseAttemptsAC,
} from "../../redux/reducers/authReducer";
const Auth = ({
  falseAttemptsCount,
  initialized,
  loginAC,
  passwordAC,
  login,
  password,
  loginSubmitAC,
  incrementFalseAttemptsAC,
}) => {
  useEffect(() => {
    if (falseAttemptsCount === 1) {
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  }, [falseAttemptsCount]);
  if (initialized) {
    return <Redirect to={"/main"} />;
  }
  const handleLoginChange = (e) => {
    loginAC(e.target.value);
  };
  const handlePasswordChange = (e) => {
    passwordAC(e.target.value);
  };
  const handleLoginSubmit = () => {
    validateLogin(login, password, loginSubmitAC, incrementFalseAttemptsAC);
    loginAC("");
    passwordAC("");
  };

  return (
    <div className={style.authContainer}>
      <div className={style.imgInputContainer}>
        <div className={style.inputContainer}>
          <p>Please log in to your account by typing </p>
          <p>Bon appetit</p>
          <input
            type="text"
            value={login}
            onChange={handleLoginChange}
            placeholder="login"
          />
          <br />
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="password"
          />{" "}
          <br />
          <div>{falseAttemptsCount === 1 && <Warning />}</div>
          <button
            onClick={handleLoginSubmit}
            disabled={falseAttemptsCount === 1}
          >
            Log in
          </button>
        </div>
        <div className={style.logImageContainer}>
          <img src={logImage} alt="logImage" className={style.authImage} />
          <p className={style.centeredText}>Welcome Back</p>
        </div>
      </div>
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
