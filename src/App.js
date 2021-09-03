import './App.css';

import { Route, Switch } from 'react-router-dom';

import AppBar from 'components/AppBar';
import ContactsPage from 'pages/ContactsPage';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import { authOperations } from './redux/auth';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.checkCurrentUser());
  }, [dispatch]);

  return (
    <div className="App">
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/contacts">
          <ContactsPage />
        </Route>
      </Switch>
    </div>
  );
}
