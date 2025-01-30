

import React, { useState } from "react";
import "./registerUser.css";

const Cadastre = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [erro, setErro] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validarSenha = (pass) => {
    // Exige pelo menos 8 caracteres, incluindo maiúscula, minúscula e símbolo
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
    return regex.test(pass);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErro("");

    if (!validarSenha(senha)) {
      setErro("A senha precisa ter ao menos 8 caracteres, incluindo letras maiúsculas, minúsculas e ao menos um símbolo");
      return;
    }

    if (senha !== confirmaSenha) {
      setErro("As senhas não conferem");
      return;
    }

    // Caso queira prosseguir com o cadastro
    alert("Cadastro efetuado com sucesso!");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="title-container">
          <img className="img" src="/img/coruja.png" alt="logo" />
          <h1 className="login-title">Cadastre-se</h1>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Insira seu e-mail"
            className="login-input-alt"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="password-wrapper-alt">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Insira sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <button
              type="button"
              className="toggle-password"
              onClick={togglePasswordVisibility}
            >
              👁
            </button>
          </div>

          <div className="password-wrapper-alt">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirme sua senha"
              value={confirmaSenha}
              onChange={(e) => setConfirmaSenha(e.target.value)}
            />
          </div>

          {erro && <p className="erro">{erro}</p>}

          <button type="submit" className="login-button-alt">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Cadastre;
