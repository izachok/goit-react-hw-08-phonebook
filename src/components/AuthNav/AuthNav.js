import { NavLink } from 'react-router-dom';
import React from 'react';

export default function AuthNav() {
  return (
    <>
      <NavLink to="/register" exact>
        Register
      </NavLink>
      <NavLink to="/login" exact>
        Login
      </NavLink>
    </>
  );
}
