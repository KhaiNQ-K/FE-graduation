import { AppBar, Button, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { authActions } from 'features/auth/authSlice';
import React from 'react';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export function Header() {
  const dispatch = useDispatch();

  const classes = useStyles();

  //logic

  const handleLogoutClick = () => {
    dispatch(authActions.logout());
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Student Management
          </Typography>
          <Button color="inherit" onClick={handleLogoutClick}>
            Logut
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
