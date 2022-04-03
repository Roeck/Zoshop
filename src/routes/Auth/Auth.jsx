import React from 'react';

import SignUp from '../../components/SignUp/SignUp';
import SignIn from '../../components/SignIn/SignIn';

import './auth.styles.scss';

const Auth = () => {
  return (
    <div className='auth-container'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Auth;