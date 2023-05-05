// import { useDispatch } from 'react-redux';
// import { register } from 'redux/auth/operations';

// export const RegisterForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();

//     const form = e.currentTarget;
//     const user = {
//       name: form.elements.name.value,
//       email: form.elements.email.value,
//       password: form.elements.password.value,
//     };

//     dispatch(register(user));
//     form.reset();
//   };

//   return (
//     <form onSubmit={handleSubmit} autoComplete="off">
//       <label>
//         Username
//         <input type="text" name="name" />
//       </label>
//       <label>
//         Email
//         <input type="email" name="email" />
//       </label>
//       <label>
//         Password
//         <input type="password" name="password" />
//       </label>
//       <button type="submit">Register</button>
//     </form>
//   );
// };
import { Grid, TextField, Button } from "@material-ui/core";
import { AccountCircle, Email, Lock } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { register } from "redux/auth/operations";

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
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
    <form onSubmit={handleSubmit} autoComplete="off">
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <AccountCircle />
        </Grid>
        <Grid item>
          <TextField label="Username" name="name" />
        </Grid>
      </Grid>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Email />
        </Grid>
        <Grid item>
          <TextField label="Email" type="email" name="email" />
        </Grid>
      </Grid>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Lock />
        </Grid>
        <Grid item>
          <TextField label="Password" type="password" name="password" />
        </Grid>
      </Grid>
      <Button type="submit" variant="contained" color="primary">
        Register
      </Button>
    </form>
  );
};
