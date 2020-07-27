import React from "react";
import style from "./navBar.module.scss";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { loginSubmitAC } from "./../../redux/reducers/authReducer";
import Search from "./../search/Search";

const NavBar = (props) => {
  const handleLogout = () => {
    props.loginSubmitAC(false);
  };
  return (
    <div className={style.navBarContainer}>
      <div className={style.logoContainer}>LOGO</div>
      <div className={style.menuContainer}>
        <Navigation link="/main" content="Main" />
        <Navigation link="/ownRecipe" content="Own recipe" />
        {props.initialized ? (
          <span onClick={handleLogout} className={style.navItem}>
            Log out
          </span>
        ) : (
          <Navigation link="/login" content="Login" />
        )}
      </div>
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
