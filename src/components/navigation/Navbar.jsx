import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import style from "./navBar.module.scss";
import { loginSubmitAC } from "./../../redux/reducers/authReducer";

const NavBar = ({ loginSubmitAC, initialized }) => {
  const handleLogout = () => {
    loginSubmitAC(false);
  };
  return (
    <div className={style.navBarContainer}>
      <div className={style.logoContainer}>LOGO</div>
      <div className={style.menuContainer}>
        <Navigation link="/main" content="Main" />
        <Navigation link="/ownRecipe" content="Own recipe" />
        {initialized ? (
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

const Navigation = ({ link, content }) => {
  return (
    <div className={style.navItem}>
      <NavLink to={link} activeClassName={style.activeLink}>
        {content}
      </NavLink>
    </div>
  );
};

const mapStateToProps = (state) => ({
  initialized: state.authReducer.initialized,
});

export default connect(mapStateToProps, { loginSubmitAC })(NavBar);
