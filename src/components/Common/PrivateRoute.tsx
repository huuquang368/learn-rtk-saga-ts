import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';

export function PrivateRoute(props: RouteProps) {
  // check if user is logged in
  // if yes -> show route, else -> redirect to login page
  const isLoggedIn = Boolean(localStorage.getItem('access_token'));
  if (!isLoggedIn) return <Redirect to="/login" />;

  return <Route {...props} />;
}
