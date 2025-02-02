import { BrowserRouter, Routes, Route } from "react-router-dom";


import HomePage from "../components/home/HomePage";
import Login from "../components/login/Login";
import Cadastro from "../components/register/registerUser";
import TelaInicial from "../components/FocusFlow/telaInicial";
import Atribuicao from "../components/cadastroTarefas/listTarefas";
import ListTarefas from "../components/MatrizEise/Matriz"





export default function Router() {
    
    const port = '5000'
    const ipAddress = 'localhost';
    const serverIP = `http://${ipAddress}:${port}`;

    return (
        
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage serverIP={serverIP} />} />
                    <Route path="/Login" element={<Login serverIP={serverIP} />} />
                    <Route path="/Cadastro" element={<Cadastro serverIP={serverIP} />} />
                    <Route path="/index" element={<TelaInicial serverIP={serverIP} />} />
                    <Route path="/Atribuicao" element={<Atribuicao serverIP={serverIP} />} />
                    <Route path="/ListTarefas" element={<ListTarefas serverIP={serverIP} />} />
                    
                    
                </Routes>
            </BrowserRouter>
       
    )
}