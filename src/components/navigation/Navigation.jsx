import React from 'react';
import { makeStyles, AppBar, Toolbar, Typography, IconButton, Switch, FormControlLabel, FormGroup, MenuItem, Menu } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { useSelector, useDispatch } from 'react-redux';
import { setIsAuth } from '../../redux/authSlice';
import { IconRenderer } from './Utils';

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
    const isAuth = useSelector((state) => state?.isAuth?.isAuth);
    const dispatch = useDispatch();

    const classes = useStyles();
    const [auth] = React.useState(isAuth);

    // const [anchorEl, setAnchorEl] = React.useState(null);
    // const open = Boolean(anchorEl);

    const handleChange = () => {
        dispatch(setIsAuth(false));
    };

    // const handleAccountMenuOpen = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };

    // const handleAccountMenuClose = () => {
    //     setAnchorEl(null);
    // };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>

                    <div className={classes.iconsBlock}>
                        {IconRenderer()}
                    </div>

                    {isAuth &&
                        <div>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                // onClick={handleAccountMenuOpen}
                                color="inherit"
                                size='small'
                            >
                                <AccountCircle />
                            </IconButton>
                            {/* <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={handleAccountMenuClose}
                            >
                                <MenuItem onClick={handleAccountMenuClose}>Profile</MenuItem>
                                <MenuItem onClick={handleAccountMenuClose}>My account</MenuItem>
                            </Menu> */}

                            <FormGroup>
                                <FormControlLabel
                                    control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
                                    label={'Logout'}
                                />
                            </FormGroup>
                        </div>}

                </Toolbar>
            </AppBar>
        </div >
    );
}

export default Navigation;