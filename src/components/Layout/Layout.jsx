import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <>
      <ToastContainer autoClose={3000} />
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
