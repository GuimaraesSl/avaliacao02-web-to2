import { Routes, Route } from "react-router-dom";
import AlunoForm from "./AlunoForm";
import AlunoList from "./AlunoList";
import Navbar from "../components/Navbar";
import ListarPorCurso from "./ListaPorCurso";

const Main = () => {
  return (
    <div>
      <Navbar /> {/* Renderiza a navegação */}
      <Routes>
        <Route path="/aluno/listar" element={<AlunoList />} />
        <Route path="/aluno/listarcurso" element={<ListarPorCurso />} />
        <Route path="/aluno/criar" element={<AlunoForm />} />
        <Route path="/aluno/editar/:id" element={<AlunoForm />} />
      </Routes>
    </div>
  );
}

export default Main;