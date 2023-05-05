import { Toolbar } from '@mui/material';
import { useAuth } from 'hooks/useAuth';
import { Link } from 'components/NavLink/NavLink';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Toolbar sx={{ marginRight: 'auto' }}>
      <Link path="/">Home</Link>
      {isLoggedIn && <Link path="/contacts">Contacts</Link>}
    </Toolbar>
  );
};
