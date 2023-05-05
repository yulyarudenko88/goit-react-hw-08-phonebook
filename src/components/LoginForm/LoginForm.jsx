import { Box, Container } from '@mui/material';
import { InputField } from 'components/InputField/InputField';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Btn } from 'components/Button/Button';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const user = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(logIn(user));
    form.reset();
  };

  return (
    <Container maxWidth="sm">
      <Box component="form" onSubmit={handleSubmit} autoComplete="off">
        <InputField label="Email" name="email" />
        <InputField label="Password" name="password" type="password" />
        <Btn>Log In</Btn>
      </Box>
    </Container>
  );
};
