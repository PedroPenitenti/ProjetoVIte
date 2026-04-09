import AuthForm from './AuthForm'

function Register({ onRegister, loading, errorMessage }) {
  return (
    <AuthForm
      title="Crie sua conta"
      description="Cadastre-se em segundos e desbloqueie a nova experiencia do app."
      submitLabel={loading ? 'Cadastrando...' : 'Criar conta'}
      onSubmit={onRegister}
      loading={loading}
      errorMessage={errorMessage}
      passwordAutoComplete="new-password"
    />
  )
}

export default Register
