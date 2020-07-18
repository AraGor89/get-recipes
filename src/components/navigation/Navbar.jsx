import React from "react";
import style from "./navBar.module.scss";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { loginSubmitAC } from "./../../redux/reducers/authReducer";

const NavBar = (props) => {
  const handleLogout = () => {
    props.loginSubmitAC(false);
  };
  return (
    <div className={style.navBarContainer}>
      {props.initialized ? (
        <span onClick={handleLogout}>Log out</span>
      ) : (
        <Navigation link="/login" content="Login" />
      )}
      <Navigation link="/main" content="Main" />
      <Navigation link="/ownRecipe" content="Own recipe" />
    </div>
  );
};

const Navigation = (props) => {
  return (
    <div className={style.navItem}>
      <NavLink to={props.link} activeClassName={style.activeLink}>
        {props.content}
      </NavLink>
    </div>
  );
};

const mapStateToProps = (state) => ({
  initialized: state.authReducer.initialized,
});

export default connect(mapStateToProps, { loginSubmitAC })(NavBar);
