import { Container } from '@mui/material';
import React from 'react';
import { Description, Btn } from './Home.styled';

const Home = () => {
  return (
    <Container maxWidth="sm">
      <h1>Phonebook</h1>
      <Description>
        A versatile application for working with your contacts, which offers the
        ability to create, store and delete them.
      </Description>
      <Description>
        If you are not registered yet, follow the link
        <Btn to="/register">Register</Btn>
      </Description>
      <Description>
        If you are registered, go to the authorization page
        <Btn to="/login">Log In</Btn>
      </Description>
    </Container>
  );
};

export default Home;
