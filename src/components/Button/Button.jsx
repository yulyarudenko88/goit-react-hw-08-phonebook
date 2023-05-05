import { Button } from "@mui/material";
import PropTypes from 'prop-types';

export const Btn = ({ children }) => {
  return (
    <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            mb: 2,
            backgroundColor: ' #b19cd9',
            color: '#fff',
            '&:hover': { backgroundColor: ' #9376b0' },
            '&:focus': { backgroundColor: ' #9376b0' },
          }}
        >
          { children }
        </Button>
  );
};

Btn.propTypes = {
  children: PropTypes.string.isRequired,  
};
