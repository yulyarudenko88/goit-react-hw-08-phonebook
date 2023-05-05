import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { AppBar as MyAppBar } from '@mui/material';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <MyAppBar
      position="static"
      sx={{
        bgcolor: '#b19cd9',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </MyAppBar>
  );
};
