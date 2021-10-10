import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core';
import { Dashboard, LibraryBooks, PeopleAlt } from '@material-ui/icons';
import React from 'react';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '300px',
    backgroundColor: theme.palette.background.paper,
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',

    '$.active > div': {
      backgroundColor: theme.palette.background.seleced,
    },
  },
}));

export function SideBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <List component="nav">
        <NavLink to="/admin/dasboard" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard"></ListItemText>
          </ListItem>
        </NavLink>
        <NavLink to="/admin/users" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <PeopleAlt />
            </ListItemIcon>
            <ListItemText primary="Customers"></ListItemText>
          </ListItem>
        </NavLink>
        <NavLink to="/admin/posts" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <LibraryBooks />
            </ListItemIcon>
            <ListItemText primary="Posts"></ListItemText>
          </ListItem>
        </NavLink>
      </List>
    </div>
  );
}
