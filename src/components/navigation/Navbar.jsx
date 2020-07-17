import React from "react";
import style from "./navBar.module.scss";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={style.navBarContainer}>
      <Navigation link="/login" content="Login" />
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

export default NavBar;
