import { Redirect, Switch, Route } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { authOperations, authSelectors } from './redux/auth';
import { useDispatch, useSelector } from 'react-redux';

import AppBar from 'components/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { LinearProgress } from '@material-ui/core';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

const AuthPage = lazy(() =>
  import('pages/AuthPage' /* webpackChunkName: "auth-page" */),
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
      <CssBaseline />
      {isLogging ? (
        <LinearProgress />
      ) : (
        <>
          <AppBar />
          <Suspense fallback={<LinearProgress />}>
            <Switch>
              <PrivateRoute path="/" exact redirectTo="/login">
                <Redirect to="/contacts" />
              </PrivateRoute>
              <PublicRoute path="/login" restricted redirectTo="/contacts">
                <AuthPage />
              </PublicRoute>
              <PublicRoute path="/register" restricted redirectTo="/contacts">
                <AuthPage />
              </PublicRoute>
              <PrivateRoute path="/contacts">
                <ContactsPage />
              </PrivateRoute>
              <Route>
                <Redirect to="/" />
              </Route>
            </Switch>
          </Suspense>
        </>
      )}
    </div>
  );
}
