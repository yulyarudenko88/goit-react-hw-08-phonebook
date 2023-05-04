import React, { lazy, useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Layout } from 'components/Layout/Layout';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';
import Loader from 'components/Loader/Loader';

const Home = lazy(() => import('pages/Home/Home'));
const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </>
  );
};
