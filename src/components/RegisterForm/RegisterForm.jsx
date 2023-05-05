import { Box, Container } from '@mui/material';
import { Btn } from 'components/Button/Button';
import { InputField } from 'components/InputField/InputField';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const user = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(register(user));
    form.reset();
  };

  return (
    <Container maxWidth="sm">
      <Box component="form" onSubmit={handleSubmit} autoComplete="off">
        <InputField label="Username" name="name" />
        <InputField label="Email" name="email" />
        <InputField label="Password" name="password" type="password" />
        <Btn>Register</Btn>
      </Box>
    </Container>
  );
};
