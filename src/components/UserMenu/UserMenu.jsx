import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { Button, Typography } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <>
      <Typography variant="body1" sx={{ mr: 2, color: '#ffffff' }}>
        Welcome, {user.email}
      </Typography>
      <Button
        color="inherit"
        onClick={() => dispatch(logOut())}
        sx={{
          color: '#ffffff',
          '&:hover': { color: '#6a0dad' },
          '&:focus': { color: '#6a0dad' },
        }}
      >
        Logout
      </Button>
    </>
  );
};