import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';
import LocalBarIcon from '@material-ui/icons/LocalBar';

const icons = [
    { icon: <HomeIcon />, page: '/' },
    { icon: <SearchIcon />, page: '/search' },
    { icon: <FastfoodIcon />, page: '/fastfood' },
    { icon: <EmojiFoodBeverageIcon />, page: '/tea' },
    { icon: <LocalBarIcon />, page: '/drinks' },
]

export const IconRenderer = () => (
    icons.map((item) => {
        return (
            <React.Fragment key={item.page}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                    component={Link}
                    to={item.page}
                >
                    {item.icon}
                </IconButton>
            </React.Fragment>
        )
    })
)