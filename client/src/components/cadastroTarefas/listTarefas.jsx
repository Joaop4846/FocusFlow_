import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import Swal from "sweetalert2";
import "./listTarefas.css";

const ChallengeAssignment = ({ serverIP }) => {
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();

  // Redirecionamento se não houver token
  React.useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);

  // Estado inicial do formulário
  const initialFormState = {
    nomeTarefa: "",
    descricaoTarefa: "",
    dataTarefa: "",
    prioridade: "Médio"
  };

  const [formData, setFormData] = useState(initialFormState);
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  // Função para atualizar o estado do formulário
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Função para validar o formulário
  const validateForm = () => {
    if (!formData.nomeTarefa.trim()) {
      setError("O nome da tarefa é obrigatório");
      return false;
    }
    if (!formData.descricaoTarefa.trim()) {
      setError("A descrição da tarefa é obrigatória");
      return false;
    }
    if (!formData.dataTarefa) {
      setError("A data da tarefa é obrigatória");
      return false;
    }
    return true;
  };

  // Função para enviar dados ao backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) return;

    const payload = {
      nome_tarefa: formData.nomeTarefa,
      descricao_tarefa: formData.descricaoTarefa,
      data_tarefa: dayjs(formData.dataTarefa).format("YYYY-MM-DD"),
      prioridade: formData.prioridade
    };

    try {
      const response = await fetch(`${serverIP}/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": token
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Falha ao criar tarefa");
      }

      const data = await response.json();
      setTasks((prev) => [...prev, data]);
      setFormData(initialFormState);
      
      // Utilizando SweetAlert2 para mostrar a mensagem de sucesso
      Swal.fire("Tarefa cadastrada!", "A tarefa foi criada com sucesso.", "success");

    } catch (error) {
      setError("Erro ao criar tarefa: " + error.message);
      console.error("Erro detalhado:", error);
    }
  };

  return (
    <div className="container">
      <header className="header">
        <div className="title-header">
          <img className="img" src="/img/coruja.png" alt="Logo" />
          <span className="page-name">FocusFlow</span>
        </div>
      </header>

      <main className="main-content">
        <p className="titleList">Criar Nova Tarefa</p>
        
        {error && (
          <div style={{ color: "red", margin: "10px 0", textAlign: "center" }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="task-form">
          <div className="form-group">
            <label htmlFor="nomeTarefa">Nome da Tarefa:</label>
            <input
              type="text"
              id="nomeTarefa"
              name="nomeTarefa"
              value={formData.nomeTarefa}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="descricaoTarefa">Descrição:</label>
            <textarea
              id="descricaoTarefa"
              name="descricaoTarefa"
              value={formData.descricaoTarefa}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="dataTarefa">Data de Término:</label>
            <input
              type="date"
              id="dataTarefa"
              name="dataTarefa"
              value={formData.dataTarefa}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="prioridade">Prioridade:</label>
            <select
              id="prioridade"
              name="prioridade"
              value={formData.prioridade}
              onChange={handleInputChange}
            >
              <option value="Baixa">Baixa</option>
              <option value="Médio">Médio</option>
              <option value="Alta">Alta</option>
            </select>
          </div>

          <div className="button-group">
            <button type="button" onClick={() => navigate(-1)} className="btn-cancel">
              Cancelar
            </button>
            <button type="submit" className="btn-submit">
              Criar Tarefa
            </button>
          </div>
        </form>
      </main>
    
    
    </div>
  );
};

export default ChallengeAssignment;