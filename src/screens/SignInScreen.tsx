import React from 'react';

import UserInput from '../components/UserInput';

const SignInScreen: React.FC = () => {
  return (
    <UserInput title="新規会員登録" footerDescription="会員の方は" footerLinkDestination="LogIn" />
  );
};

export default SignInScreen;
