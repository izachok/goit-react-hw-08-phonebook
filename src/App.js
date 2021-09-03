import './App.css';

import { Redirect, Switch } from 'react-router-dom';
// import RegisterPage from 'pages/RegisterPage';
import { Suspense, lazy, useEffect } from 'react';
import { authOperations, authSelectors } from './redux/auth';
import { useDispatch, useSelector } from 'react-redux';

import AppBar from 'components/AppBar';
// import ContactsPage from 'pages/ContactsPage';
import Loading from 'components/Loading';
// import LoginPage from 'pages/LoginPage';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

const RegisterPage = lazy(() =>
  import('pages/RegisterPage' /* webpackChunkName: "register-page" */),
);
const LoginPage = lazy(() =>
  import('pages/LoginPage' /* webpackChunkName: "login-page" */),
);
const ContactsPage = lazy(() =>
  import('pages/ContactsPage' /* webpackChunkName: "contacts-page" */),
);

export default function App() {
  const dispatch = useDispatch();
  const isLogging = useSelector(authSelectors.getIsLogging);

  useEffect(() => {
    dispatch(authOperations.checkCurrentUser());
  }, [dispatch]);

  return (
    <div className="App">
      {isLogging ? (
        <Loading />
      ) : (
        <>
          <AppBar />
          <Switch>
            <Suspense fallback={<Loading />}>
              <PrivateRoute path="/" exact redirectTo="/login">
                <Redirect to="/contacts" />
              </PrivateRoute>
              <PublicRoute path="/login" restricted redirectTo="/contacts">
                <LoginPage />
              </PublicRoute>
              <PublicRoute path="/register" restricted redirectTo="/contacts">
                <RegisterPage />
              </PublicRoute>
              <PrivateRoute path="/contacts">
                <ContactsPage />
              </PrivateRoute>
            </Suspense>
          </Switch>
        </>
      )}
    </div>
  );
}
