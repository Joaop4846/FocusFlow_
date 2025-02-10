import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./completedTasks.css";

const CompletedTasks = ({ serverIP }) => {
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchCompletedTasks() {
      try {
        const response = await fetch(`${serverIP}/listCompletedTasks`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": token,
          },
        });
        const data = await response.json();
        if (response.ok) {
          setTasks(data);
        } else {
          setError(data.message || "Erro ao buscar tarefas concluídas.");
        }
      } catch (err) {
        setError("Ocorreu um erro na comunicação com o servidor.");
      } finally {
        setLoading(false);
      }
    }

    fetchCompletedTasks();
  }, [serverIP, token]);

  return (
    <div className="container">
      <header className="header">
        <div className="title-header">
          <img className="img" src="/img/coruja.png" alt="logo" />
          <span className="page-name">FocusFlow</span>
        </div>
      </header>

      <main className="main-content-completed">
        <h1 className="titleCompleted">Tarefas Concluídas</h1>
        <div className="task-list-container">
          {loading ? (
            <p>Carregando tarefas concluídas...</p>
          ) : error ? (
            <p>{error}</p>
          ) : tasks.length > 0 ? (
            tasks.map((task) => (
              <div key={task.id} className="task-item">
                <div className="task-summary">
                  <span className="task-name">{task.NOME_TAREFA}</span>
                  
                  <span className="task-priority"> Nível de prioridade: {task.PRIORIDADE}</span>
                </div>
                <div className="task-description">
                  {task.DESCRICAO_TAREFA}
                </div>
              </div>
            ))
          ) : (
            <p>Nenhuma tarefa concluída encontrada.</p>
          )}
        </div>
      </main>
    </div>
  );
};

function formatDate(dateStr) {
  if (!dateStr) return "";
  const date = dateStr.split("T")[0];
  const parts = date.split("-");
  return `${parts[2]}/${parts[1]}/${parts[0].slice(-2)}`;
}

export default CompletedTasks;