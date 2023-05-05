import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Link = ({ path, children }) => {
  return (
    <Button
      color="inherit"
      component={NavLink}
      to={path}
      sx={{
        color: '#ffffff',
        '&:hover': { color: '#6a0dad' },
        '&:focus': { color: '#6a0dad' },
        '&.active': { color: '#6a0dad' },
      }}
    >
      {children}
    </Button>
  );
};

Link.propTypes = {
  children: PropTypes.string,
  path: PropTypes.string,
};
