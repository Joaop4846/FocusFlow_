import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./Matriz.css";

const TaskList = ({ serverIP }) => {
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
    async function fetchTasks() {
      try {
        const response = await fetch(`${serverIP}/listTasks`, {
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
          setError(data.message || "Erro ao buscar tarefas");
        }
      } catch (err) {
        setError("Ocorreu um erro na comunicação com o servidor.");
      } finally {
        setLoading(false);
      }
    }

    fetchTasks();
  }, [serverIP, token]);

  const handleConclude = (task) => {
    Swal.fire({
      title: "Concluir Tarefa",
      text: "Você deseja concluir a tarefa?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sim",
      cancelButtonText: "Não",
      reverseButtons: true
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(`${serverIP}/concludeTask`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "x-access-token": token,
            },
            body: JSON.stringify({ id: task.ID_TAREFA })
          });
          if (response.ok) {
            Swal.fire({
              title: "Concluído!",
              text: "A tarefa foi concluída com sucesso.",
              icon: "success",
              timer: 1500,
              showConfirmButton: false,
            }).then(() => {
              window.location.reload();
            });
          } else {
            Swal.fire("Erro", "Não foi possível concluir a tarefa.", "error");
          }
        } catch (error) {
          Swal.fire("Erro", "Erro na comunicação com o servidor.", "error");
        }
      }
    });
  };

  const handleDelete = (task) => {
    Swal.fire({
      title: "Excluir Tarefa",
      text: "Você realmente deseja excluir a tarefa?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sim",
      cancelButtonText: "Não",
      reverseButtons: true
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(`${serverIP}/deleteTask`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "x-access-token": token,
            },
            body: JSON.stringify({ id: task.ID_TAREFA })
          });
          if (response.ok) {
            Swal.fire({
              title: "Excluído!",
              text: "A tarefa foi excluída com sucesso.",
              icon: "success",
              timer: 1500,
              showConfirmButton: false,
            }).then(() => {
              window.location.reload();
            });
          } else {
            Swal.fire("Erro", "Não foi possível excluir a tarefa.", "error");
          }
        } catch (error) {
          Swal.fire("Erro", "Erro na comunicação com o servidor.", "error");
        }
      }
    });
  };

  return (
    <div className="container">
      <header className="header">
        <div className="title-header">
          <img className="img" src="/img/coruja.png" alt="logo" />
          <span className="page-name">FocusFlow</span>
        </div>
      </header>

      <main className="main-content-matriz">
        <h1 className="titleMatriz">Minhas Tarefas</h1>
        <div className="task-list-container">
          {loading ? (
            <p>Carregando tarefas...</p>
          ) : error ? (
            <p>{error}</p>
          ) : tasks.length > 0 ? (
            tasks.map((task) => (
              <div key={task.id} className="task-item">
                <div className="task-summary">
                  <span className="task-name">{task.NOME_TAREFA}</span>
                  <span className="task-date">
                    {formatDatetime(task.DATA_TAREFA)}
                  </span>
                  <span className="task-priority">{task.PRIORIDADE}</span>
                  <div className="task-actions">
                    <button
                      className="btnAction btnConclude"
                      onClick={() => handleConclude(task)}
                    >
                      Concluir
                    </button>
                    <button
                      className="btnAction btnDelete"
                      onClick={() => handleDelete(task)}
                    >
                      Excluir
                    </button>
                  </div>
                </div>
                <div className="task-description">{task.DESCRICAO_TAREFA}</div>
              </div>
            ))
          ) : (
            <p className="TarefasNAtribuidas">Não tem tarefas atribuídas no presente momento.</p>
          )}
        </div>
      </main>

    
    </div>
  );
};

function formatDatetime(dateStr) {
  const date = dateStr?.split("T")[0];
  const dateParts = date?.split("-");
  return `${dateParts[2]}/${dateParts[1]}/${dateParts[0].slice(-2)}`;
}

export default TaskList;