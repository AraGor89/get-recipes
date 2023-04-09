import React, { useState } from "react";
import {
  AppBar,
  Switch,
  Toolbar,
  FormGroup,
  IconButton,
  makeStyles,
  FormControlLabel,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { useSelector, useDispatch } from "react-redux";
import { setIsAuth } from "../../redux/authSlice";
import { IconRenderer } from "./Utils";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  iconsBlock: {
    flexGrow: 1,
  },
}));

const Navigation = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state?.isAuth?.isAuth);
  const isAuthLS = localStorage.getItem("isAuth");
  const [isAuthorized, setIsAuthorized] = useState(isAuth || isAuthLS);

  const classes = useStyles();

  const handleChange = () => {
    setIsAuthorized(false);
    dispatch(setIsAuth(false));
    localStorage.removeItem("isAuth");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            edge="start"
            aria-label="menu"
            disabled
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton> */}

          <div className={classes.iconsBlock}>{IconRenderer()}</div>

          {isAuthorized && (
            <div style={{ display: "flex" }}>
              <IconButton
                size="small"
                color="inherit"
                aria-haspopup="true"
                aria-controls="menu-appbar"
                aria-label="account of current user"
              >
                <AccountCircle />
              </IconButton>

              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      onChange={handleChange}
                      checked={isAuthorized}
                      aria-label="login switch"
                    />
                  }
                  label={"Logout"}
                />
              </FormGroup>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigation;
