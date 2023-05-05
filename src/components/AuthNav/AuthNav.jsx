import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <>
      <Button
        color="inherit"
        component={NavLink}
        to="/register"
        sx={{
          color: '#ffffff',
          '&:hover': { color: '#6a0dad' },
          '&:focus': { color: '#6a0dad' },
          '&.active': { color: '#6a0dad' },
        }}
      >
        Register
      </Button>
      <Button
        color="inherit"
        component={NavLink}
        to="/login"
        sx={{
          color: '#ffffff',
          '&:hover': { color: '#6a0dad' },
          '&:focus': { color: '#6a0dad' },
          '&.active': { color: '#6a0dad' },
        }}
      >
        Login
      </Button>
    </>
  );
};

/* <div>
<NavLink to="/register">
  Register
</NavLink>
<NavLink to="/login">
  Log In
</NavLink>
</div> */
