import "./style.css";
import { useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs"

function Login() {
  const [showpassword, setShowpassword] = useState(false);
  return (
    <div className="login">
      <h1>Login</h1>
      <form>
        <input className="login-input" style={{width:"50%"}}
          type="text"
          placeholder="Email ou nome de usuário"
          name="username"
          required
        />
        <div className="login-password">
          <input className="login-input" style={{width:"100%"}}
            type="password" 
            placeholder="Senha" 
            name="password" 
            required
          />
          <button onClick={setShowpassword(!showpassword)} ><BsFillEyeFill/></button>
        </div>
        <button className="login-button" type="submit">ENTRAR</button>
      </form>
      <a href="">Ainda não tem conta? Cadastra-se já</a>
      <a href="">Esqueceu a senha?</a>
    </div>
  );
}

export default Login;
