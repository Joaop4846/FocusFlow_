import React from "react";
import { useNavigate } from "react-router-dom";
import "./telaInicial.css";

const NovaPagina = () => {
  const navigate = useNavigate();

  const handleAtribuicao = () => {
    navigate("/Atribuicao");
  };

  const handleLista = () => {
    navigate("/ListTarefas");
  };

  const handleCompleted = () => {
    navigate("/completed");
  };

  return (
    <div className="container">
      <header className="header">
        <div className="title-header">
          <img className="img" src="/img/coruja.png" alt="logo" />
          <span className="page-name">FocusFlow</span>
        </div>
        <div className="auth-buttons">
       
        </div>
      </header>

      <main className="main-content">
        <h1 className="title">Seja Bem-Vindo</h1>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <button className="btn" onClick={handleAtribuicao}>Atribuição</button>
          <button className="btn" onClick={handleLista}>Lista</button>
          <button className="btn" onClick={handleCompleted}>Completadas</button>

        </div>
      </main>

      <footer className="footer">
      <p>Siga nossas redes sociais:</p>
        <p>
          linkedin: <a href="https://www.linkedin.com/in/jo%C3%A3o-paulo-dias-0a420317b">@linkedin</a> | GitHub:{" "}
          <a href="https://github.com/Joaop4846">@GitHub</a>
        </p>
        <p>Contato: (11 94218-9237) / joaop4846@gmail.com</p>
      </footer>
    </div>
  );
};

export default NovaPagina;
