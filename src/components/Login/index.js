import "./style.css";

function Login() {
  return (
    <div className="login">
      <h1>Login</h1>
      <form>
        <input
          type="text"
          placeholder="Email ou nome de usuário"
          name="username"
          required
        />
        <input type="password" placeholder="Senha" name="password" required />
        <button type="submit">ENTRAR</button>
      </form>
      <a href="">Ainda não tem conta? Cadastra-se já</a>
      <a href="">Esqueceu a senha?</a>
    </div>
  );
}

export default Login;
