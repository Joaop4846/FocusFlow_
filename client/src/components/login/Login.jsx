// Login.jsx

import React, { useState } from "react";
import "./login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="title-container">
       
          <img className="img" src="/img/coruja.png" alt="logo" />
          <h1 className="login-title">FocusFlow</h1>
        </div>

        <form className="login-form">
          <input
            type="email"
            placeholder="Insira seu e-mail"
            className="login-input-alt"
          />
          <div className="password-wrapper-alt">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Insira sua senha"
              className="senha-input-alt"
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
        </form>
      </div>
    </div>
  );
};

export default Login;
