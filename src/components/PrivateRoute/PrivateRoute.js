import { Redirect, Route } from 'react-router-dom';

import React from 'react';
import { authSelectors } from '../../redux/auth';
import { useSelector } from 'react-redux';

export default function PrivateRoute({
  children,
  redirectTo = '/',
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
