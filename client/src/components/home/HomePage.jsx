import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [displayedText, setDisplayedText] = useState("");
  const [isTitleComplete, setIsTitleComplete] = useState(false);

  useEffect(() => {
    const titleText = "FocusFlow";
    const subtitleText = "My to-do list";
    const combinedText = titleText + "|" + subtitleText;
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < combinedText.length) {
        const currentChar = combinedText[currentIndex];
        if (currentChar === "|") {
          setIsTitleComplete(true);
          setDisplayedText((prev) => prev + "\n");
        } else {
          setDisplayedText((prev) => prev + currentChar);
        }
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  const handleSignIn = () => {
    navigate("/Login");
  };

  const handleRegister = () => {
    navigate("/Cadastro");
  };

  const [title, subtitle] = displayedText.split("\n");

  return (
    <div className="container">
      <header className="header">
      <div className="title-header">
        <img className="img" src="/img/coruja.png" alt="logo" />
        <span className="page-name">FocusFlow</span>
        </div>
        <div className="auth-buttons">
          <button 
            className="btn sign-in" 
            onClick={handleSignIn}
          >
            Sign in
          </button>
          <button 
            className="btn register" 
            onClick={handleRegister}
          >
            Register
          </button>
        </div>
      </header>

      <main className="main-content">
        <h1 className="title">{title || ""}</h1>
        <p className="subtitle">{isTitleComplete ? subtitle || "" : ""}</p>
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

export default HomePage;
