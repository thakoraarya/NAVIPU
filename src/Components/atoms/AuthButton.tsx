// import {useUser} from '@auth0/nextjs-auth0/client';
import React from 'react';

interface AuthButtonProps {
  AuthPath: any;
  authState: any;
}

const AuthButton: React.FC<AuthButtonProps> = ({ AuthPath, authState }) => {
  return <a href={AuthPath}>{authState}</a>;
};

export default AuthButton;