import AuthForm from './AuthForm'

function Login({ onLogin, loading, errorMessage }) {
  return (
    <AuthForm
      title="Bem-vindo de volta"
      description="Acesse sua conta para continuar de onde voce parou."
      submitLabel={loading ? 'Entrando...' : 'Entrar agora'}
      onSubmit={onLogin}
      loading={loading}
      errorMessage={errorMessage}
    />
  )
}

export default Login
