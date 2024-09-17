import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Routes, Route } from "react-router-dom";
import AlunoForm from "./AlunoForm";
import AlunoList from "./AlunoList";

const Home = () => {
  return (
    <div className="container">
      <h1>Gestão de Alunos</h1>
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="true">
          Menu de Operações
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li><Link className="dropdown-item" to="/aluno/listar">Listar Alunos</Link></li>
          <li><Link className="dropdown-item" to="/aluno/criar">Criar Aluno</Link></li>
        </ul>
      </div>

      <Routes>
        <Route path="/aluno/listar" element={<AlunoList />} />
        <Route path="/aluno/criar" element={<AlunoForm />} />
        <Route path="/aluno/editar/:id" element={<AlunoForm />} />
      </Routes>
    </div>
  );
}

export default Home;
