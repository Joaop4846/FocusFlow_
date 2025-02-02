import React from "react";
import "./Matriz.css";

const TaskList = () => {
  // Exemplo de tarefas cadastradas
  const tasks = [
    {
      id: 1,
      nome: "Pagar contas urgentes",
      descricao: "Efetuar pagamentos antes do vencimento",
      dataTermino: "10/09/2023",
      nivelDificuldade: "Alta"
    },
    {
      id: 2,
      nome: "Ler livro de produtividade",
      descricao: "Estudar técnicas de gestão de tempo",
      dataTermino: "15/09/2023",
      nivelDificuldade: "Média"
    },
    {
      id: 3,
      nome: "Responder mensagens",
      descricao: "Checar e-mails sem relevância imediata",
      dataTermino: "08/09/2023",
      nivelDificuldade: "Baixa"
    },
    {
      id: 4,
      nome: "Ver redes sociais",
      descricao: "Distrações e entretenimento",
      dataTermino: "Sempre que quiser",
      nivelDificuldade: "Baixa"
    },
    {
      id: 5,
      nome: "Planejar a semana",
      descricao: "Organizar atividades e prioridades",
      dataTermino: "12/09/2023",
      nivelDificuldade: "Média"
    },
    {
      id: 6,
      nome: "Exercícios físicos",
      descricao: "Realizar atividade física por pelo menos 30 minutos",
      dataTermino: "Diariamente",
      nivelDificuldade: "Alta"
    }
  ];

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
        <h1 className="title">Minhas Tarefas</h1>
        <div className="task-list-container">
          {tasks.map((task) => (
            <div key={task.id} className="task-item">
              <div className="task-summary">
                <span
                  className="task-name"
                  data-full-text={task.nome}
                >
                  {task.nome.length > 15 ? task.nome.substring(0, 15) + '...' : task.nome}
                </span>
                <span className="task-date">{task.dataTermino}</span>
                <span className="task-priority">{task.nivelDificuldade}</span>
                <div className="task-actions">
                  <button className="btnAction btnConclude">Concluir</button>
                  <button className="btnAction btnEdit">Editar</button>
                  <button className="btnAction btnDelete">Excluir</button>
                </div>
              </div>
              <div className="task-description">{task.descricao}</div>
            </div>
          ))}
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

export default TaskList;