import { Box, makeStyles } from '@material-ui/core';
import { BorderRight } from '@material-ui/icons';
import React from 'react';
import { Route, Switch } from 'react-router';
import Dashboard from '../../features/dashboard/Dashboard';
import UserFeature from '../../features/user';
import { Header, SideBar } from '../Common';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
    gridTemplateColumns: '240px 1fr',
    gridTemplateAreas: `"header header" "sidebar main"`,

    minHeight: '100vh',
  },
  header: {
    gridArea: 'header',
  },
  sidebar: {
    gridArea: 'sidebar',
    BorderRight: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.background.paper,
  },
  main: {
    gridArea: 'main',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 3),
  },
}));

export function AdminLayout() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <Header />
      </Box>
      <Box className={classes.sidebar}>
        <SideBar />
      </Box>
      <Box className={classes.main}>
        <Switch>
          <Route path="/admin/dasboard">
            <Dashboard />
          </Route>
          <Route path="/admin/users">
            <UserFeature />
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}
