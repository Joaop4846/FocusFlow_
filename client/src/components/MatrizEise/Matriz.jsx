import React, { useState, useEffect } from "react";
import "./Matriz.css";

const HomePage = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTitleComplete, setIsTitleComplete] = useState(false);

  useEffect(() => {
    const titleText = "Matriz de Eisenhower";
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

  const [title, subtitle] = displayedText.split("\n") || [];

  const tasks = [
    {
      id: 1,
      quadrante: 1,
      nome: "Pagar contas urgentes",
      descricao: "Efetuar pagamentos antes do vencimento",
      dataTermino: "10/09/2023",
      nivelDificuldade: "Alta",
    },
    {
      id: 2,
      quadrante: 2,
      nome: "Ler livro de produtividade",
      descricao: "Estudar técnicas de gestão de tempo",
      dataTermino: "15/09/2023",
      nivelDificuldade: "Média",
    },
    {
      id: 3,
      quadrante: 3,
      nome: "Responder mensagens",
      descricao: "Checar e-mails sem relevância imediata",
      dataTermino: "08/09/2023",
      nivelDificuldade: "Baixa",
    },
    {
      id: 4,
      quadrante: 4,
      nome: "Ver redes sociais",
      descricao: "Distrações e entretenimento",
      dataTermino: "Sempre que quiser",
      nivelDificuldade: "Baixa",
    },
  ];

  const filterTasksByQuadrant = (quadrantNumber) => {
    return tasks.filter((task) => task.quadrante === quadrantNumber);
  };

  return (
    <div className="container">
      <header className="header">
        <div className="title-header">
          <img className="img" src="/img/coruja.png" alt="logo" />
          <span className="page-name">FocusFlow</span>
        </div>
        <div className="auth-buttons">
          <button className="btn sign-in">Sign in</button>
          <button className="btn register">Register</button>
        </div>
      </header>

      <main className="main-content">
        <h1 className="title">{title || ""}</h1>
        <p className="subtitle">{isTitleComplete ? subtitle || "" : ""}</p>

        {isTitleComplete && (
          <div className="quadrants-container">
            <div className="quadrant quadrant1">
              <h2 className="Muitoalta">Faça Agora</h2>
              <table>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Data de Término</th>
                    <th>Nível de Dificuldade</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {filterTasksByQuadrant(1).map((task) => (
                    <tr
                      key={task.id}
                      className="task-row"
                      data-descricao={task.descricao}
                    >
                      <td>{task.nome}</td>
                      <td>{task.dataTermino}</td>
                      <td>{task.nivelDificuldade}</td>
                      <td>
                        <div className="actions-container">
                          <button className="btnAction btnConclude">Concluir</button>
                          <button className="btnAction btnDelete">Excluir</button>
                          <button className="btnAction btnEdit">Editar</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="quadrant quadrant2">
              <h2 className="Alta">Programe</h2>
              <table>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Data de Término</th>
                    <th>Nível de Dificuldade</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {filterTasksByQuadrant(2).map((task) => (
                    <tr
                      key={task.id}
                      className="task-row"
                      data-descricao={task.descricao}
                    >
                      <td>{task.nome}</td>
                      <td>{task.dataTermino}</td>
                      <td>{task.nivelDificuldade}</td>
                      <td>
                        <div className="actions-container">
                          <button className="btnAction btnConclude">Concluir</button>
                          <button className="btnAction btnDelete">Excluir</button>
                          <button className="btnAction btnEdit">Editar</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="quadrant quadrant3">
              <h2 className="Media">Delegue</h2>
              <table>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Data de Término</th>
                    <th>Nível de Dificuldade</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {filterTasksByQuadrant(3).map((task) => (
                    <tr
                      key={task.id}
                      className="task-row"
                      data-descricao={task.descricao}
                    >
                      <td>{task.nome}</td>
                      <td>{task.dataTermino}</td>
                      <td>{task.nivelDificuldade}</td>
                      <td>
                        <div className="actions-container">
                          <button className="btnAction btnConclude">Concluir</button>
                          <button className="btnAction btnDelete">Excluir</button>
                          <button className="btnAction btnEdit">Editar</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="quadrant quadrant4">
              <h2 className="Baixa">Elimine</h2>
              <table>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Data de Término</th>
                    <th>Nível de Dificuldade</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {filterTasksByQuadrant(4).map((task) => (
                    <tr
                      key={task.id}
                      className="task-row"
                      data-descricao={task.descricao}
                    >
                      <td>{task.nome}</td>
                      <td>{task.dataTermino}</td>
                      <td>{task.nivelDificuldade}</td>
                      <td>
                        <div className="actions-container">
                          <button className="btnAction btnConclude">Concluir</button>
                          <button className="btnAction btnDelete">Excluir</button>
                          <button className="btnAction btnEdit">Editar</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
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
