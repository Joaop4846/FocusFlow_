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
        <h1 className="title">FocusFlow</h1>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <button className="btn" onClick={handleAtribuicao}>Atribuição</button>
          <button className="btn" onClick={handleLista}>Lista</button>
        </div>
      </main>

      <footer className="footer">
        <p>Siga nossas redes sociais:</p>
        <p>
          Instagram: <a href="#">@taskvault</a> | Twitter: <a href="#">@taskvault</a>
        </p>
        <p>Contato: contato@taskvault.com</p>
      </footer>
    </div>
  );
};

export default NovaPagina;
