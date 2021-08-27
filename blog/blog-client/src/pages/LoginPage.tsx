import { VFC } from 'react';
import AuthForm from '../components/common/auth/AuthForm';
import AuthTemplate from '../components/common/auth/AuthTemplate';

const LoginPage: VFC = () => {
  return (
    <AuthTemplate>
      <AuthForm />
    </AuthTemplate>
  );
};

export default LoginPage;
