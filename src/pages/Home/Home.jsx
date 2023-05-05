import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Телефонна книга</h1>
      <p>
        Універсальний додаток для роботи з вашими контактами, який пропонує
        можливість їх створення, зберігання та видалення.
      </p>
      <p>
        Якщо ви ще не зареєстровані, перейдіть за посиланням
        <NavLink to="/register">Register</NavLink>
      </p>
      <p>
        Якщо ви вже зарєєстровані, вам потрібно залогінитись
        <NavLink to="/login">Log In</NavLink>
      </p>
      <p>Насолоджуйтесь!</p>
    </div>
  );
};

export default Home;
