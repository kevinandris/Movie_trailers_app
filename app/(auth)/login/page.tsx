import AuthForm from "@components/AuthForm";

const Login = () => {
  return (
    <div>
      <AuthForm data-testid="auth-form" type="login" />
    </div>
  );
};

export default Login;
