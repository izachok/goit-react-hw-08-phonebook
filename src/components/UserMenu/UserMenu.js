import { authOperations, authSelectors } from '../../redux/auth';
import { useDispatch, useSelector } from 'react-redux';

import FormButton from 'components/FormButton';
import React from 'react';

export default function UserMenu() {
  const userName = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();

  return (
    <div>
      Hello, {userName}!
      <FormButton
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Logout
      </FormButton>
    </div>
  );
}
