import { TextField } from "@mui/material";
import PropTypes from 'prop-types';

export const InputField = ({ label, name, ...props }) => {
  return (
    <TextField
      variant="standard"
      margin="normal"
      required
      fullWidth
      label={label}
      name={name}
      InputLabelProps={{ style: { outline: 'none', color: '#8a2be2' } }}
      InputProps={{
        style: {
          outline: 'none',
          borderColor: '#8a2be2',
          '&:hover, &:focus': {
            borderColor: '#6a0dad',
          },
        },
        ...props, 
      }}
    />
  );
};

InputField.propTypes = {  
  name: PropTypes.string.isRequired, 
  label: PropTypes.string.isRequired, 
  props: PropTypes.string,
};