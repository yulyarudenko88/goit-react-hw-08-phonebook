import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { AppBar as MyAppBar } from '@material-ui/core';


export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <MyAppBar position="static" sx={{ bgcolor: '#8a2be2' }}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </MyAppBar>
  );
};
// import React from 'react';
// import { AppBar as MuiAppBar, Toolbar, Button, Typography } from '@material-ui/core';
// import { NavLink } from 'react-router-dom';
// import { useAuth } from 'hooks/useAuth';

// export const AppBar = () => {
//   const { isLoggedIn } = useAuth();

//   return (
//     <MuiAppBar >
//       <Toolbar>
//         <IconButton edge="start" color="inherit">
          // <Book />
          // </IconButton>
//         <Button color="inherit" component={NavLink} to="/" exact sx={{ color: '#ffffff', '&:hover': { color: '#6a0dad' }, '&:focus': { color: '#6a0dad' }, '&.active': { color: '#6a0dad' } }}>
//           Home
//         </Button>
//         <Button color="inherit" component={NavLink} to="/contacts" sx={{ color: '#ffffff', '&:hover': { color: '#6a0dad' }, '&:focus': { color: '#6a0dad' }, '&.active': { color: '#6a0dad' } }}>
//           Contacts
//         </Button>
//         {isLoggedIn ? (
//           
//         ) : (
//           
//         )}
//       </Toolbar>
//     </MuiAppBar>
//   );
// };
