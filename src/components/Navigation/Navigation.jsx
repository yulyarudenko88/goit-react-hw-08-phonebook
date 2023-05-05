import { IconButton } from '@material-ui/core';
import { Book } from '@mui/icons-material';
import { Button, Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <Toolbar>
      <IconButton edge="start" color="inherit">
        <Book />
      </IconButton>
      <Button
        color="inherit"
        component={NavLink}
        to="/"
        exact
        sx={{
          color: '#ffffff',
          '&:hover': { color: '#6a0dad' },
          '&:focus': { color: '#6a0dad' },
          '&.active': { color: '#6a0dad' },
        }}
      >
        Home
      </Button>
      <Button
        color="inherit"
        component={NavLink}
        to="/contacts"
        sx={{
          color: '#ffffff',
          '&:hover': { color: '#6a0dad' },
          '&:focus': { color: '#6a0dad' },
          '&.active': { color: '#6a0dad' },
        }}
      >
        Contacts
      </Button>
    </Toolbar>
  );
};

/* <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/contacts">Contacts</NavLink>
  </nav> */
