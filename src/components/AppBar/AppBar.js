import AuthNav from 'components/AuthNav';
import { NavLink } from 'react-router-dom';
import React from 'react';
import UserMenu from 'components/UserMenu';
import { authSelectors } from '../../redux/auth';
import { useSelector } from 'react-redux';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header>
      <h1>Phonebook</h1>
      {isLoggedIn ? (
        <>
          <UserMenu />
          <NavLink to="/contacts">Contacts</NavLink>
        </>
      ) : (
        <AuthNav />
      )}
    </header>
  );
}
