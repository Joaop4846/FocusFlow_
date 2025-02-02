import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = ({ serverIP }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch(`${serverIP}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userEmail: userEmail, userPassword: userPassword })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        sessionStorage.setItem('token', data.token);
        sessionStorage.setItem('userId', data.userId);
        navigate('/index');
        console.log(data)
      } else {
        setLoginError(true);
        console.error('Falha no login:', data.message);
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert("Ocorreu um erro ao fazer login. Por favor, tente novamente.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="title-container">
          <img className="img" src="/img/coruja.png" alt="logo" />
          <h1 className="login-title">FocusFlow</h1>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Insira seu e-mail"
            className="login-input-alt"
            value={userEmail}
            onChange={(event) => setUserEmail(event.target.value)}
          />
          <div className="password-wrapper-alt">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Insira sua senha"
              className="senha-input-alt"
              value={userPassword}
              onChange={(event) => setUserPassword(event.target.value)}
            />
            <button
              type="button"
              className="toggle-password"
              onClick={togglePasswordVisibility}
            >
              👁
            </button>
          </div>
          <button type="submit" className="login-button-alt">
            Acessar
          </button>
          {loginError && (
            <p className="error-msg">Falha no login. Verifique suas credenciais.</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;