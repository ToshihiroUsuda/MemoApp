import React from 'react';

import UserInput from '../components/UserInput';

const LogInScreen: React.FC = () => {
  return (
    <UserInput title="ログイン" footerDescription="会員登録は" footerLinkDestination="SignIn" />
  );
};

export default LogInScreen;
