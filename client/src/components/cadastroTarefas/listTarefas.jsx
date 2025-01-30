import React, { useState } from "react";
import "./listTarefas.css";

const ChallengeAssignment = () => {
  const [tasks, setTasks] = useState([]);
  const [protagonist, setProtagonist] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState("Médio");
  const [endDate, setEndDate] = useState("");

  const handleAddTask = () => {
    if (!protagonist.trim() || !description.trim() || !endDate) {
      return;
    }

    const newTask = {
      id: Date.now(),
      protagonist,
      description,
      difficulty,
      endDate
    };

    setTasks((prev) => [...prev, newTask]);
    setProtagonist("");
    setDescription("");
    setDifficulty("Médio");
    setEndDate("");
  };

  const handleRemoveTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
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
        <h1 className="title">Atribuição de Tarefas</h1>

        <table style={{ margin: "0 auto", maxWidth: "900px" }}>
          <thead>
            <tr>
              <th style={{ width: "15%" }}>Desafio</th>
              <th style={{ width: "35%" }}>Descrição</th>
              <th style={{ width: "15%" }}>Data de término</th>
              <th style={{ width: "15%" }}>Dificuldade</th>
              <th style={{ width: "10%" }}>Editar</th>
              <th style={{ width: "10%" }}>Remover</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr
                key={task.id}
                className="task-row"
                data-descricao={task.description}
              >
                <td>{task.protagonist}</td>
                <td>{task.description}</td>
                <td>{task.endDate}</td>
                <td>{task.difficulty}</td>
                <td>
                  <button className="btnAction btnEdit">Editar</button>
                </td>
                <td>
                  <button
                    className="btnAction btnDelete"
                    onClick={() => handleRemoveTask(task.id)}
                  >
                    Remover
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td>
                <input
                  type="text"
                  placeholder="Tarefa"
                  value={protagonist}
                  onChange={(e) => setProtagonist(e.target.value)}
                  style={{ width: "90%" }}
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Digite a descrição da tarefa"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  style={{ width: "90%" }}
                />
              </td>
              <td>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  style={{ width: "90%" }}
                />
              </td>
              <td>
                <select
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                >
                  <option value="Baixa">Baixa</option>
                  <option value="Médio">Médio</option>
                  <option value="Alta">Alta</option>
                </select>
              </td>
              <td colSpan={2}>
                <button
                  className="btnAction btnConclude"
                  onClick={handleAddTask}
                >
                  Adicionar
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <div style={{ marginTop: "20px" }}>
          <button className="btn" style={{ marginRight: "10px" }}>
            Cancelar
          </button>
          <button className="btn" style={{ backgroundColor: "#e91e63", color: "#fff" }}>
            Atribuir
          </button>
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

export default ChallengeAssignment;
