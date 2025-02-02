import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./registerUser.css";

const Cadastre = ({ serverIP }) => {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [erro, setErro] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validarSenha = (pass) => {
    // Exige pelo menos 8 caracteres, incluindo pelo menos uma letra minúscula, uma maiúscula e um símbolo
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
    return regex.test(pass);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro("");

    // Validação do formato da senha
    if (!validarSenha(senha)) {
      setErro("A senha precisa ter ao menos 8 caracteres, incluindo letras maiúsculas, minúsculas e ao menos um símbolo");
      return;
    }

    // Validação de confirmação de senha
    if (senha !== confirmaSenha) {
      setErro("As senhas não conferem");
      return;
    }

    // Envio dos dados para a API do back-end via fetch
    try {
      const response = await fetch(`${serverIP}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome, email, senha }),
      });

      const data = await response.json();

      if (response.ok) {
        // Em caso de sucesso, você pode redirecionar o usuário ou exibir uma mensagem de confirmação
        alert("Cadastro efetuado com sucesso!");
        // Exemplo de redirecionamento:
        navigate("/login");
      } else {
        // Se o back-end retornar um erro, exiba a mensagem recebida
        setErro(data.message || "Erro ao registrar usuário");
      }
    } catch (error) {
      console.error("Erro na requisição de cadastro:", error);
      setErro("Ocorreu um erro na comunicação com o servidor. Por favor, tente novamente.");
    }
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
            type="text"
            placeholder="Insira seu nick"
            className="login-input-alt"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

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