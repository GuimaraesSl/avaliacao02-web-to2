import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlunoService from '../Services/AlunoService';

function AlunoList() {
    const [alunos, setAlunos] = useState([]);
    const [showColored, setShowColored] = useState(false); // Estado para controlar a exibição das cores

    useEffect(() => {
        AlunoService.getAllAlunos().then((res) => {
            setAlunos(res.data);
        });
    }, []);

    const handleDelete = (id) => {
        AlunoService.deleteAluno(id).then(() => {
            setAlunos(alunos.filter(aluno => aluno.id !== id));
        });
    };

    // Função para calcular a média do IRA
    const calcularMediaIRA = () => {
        const totalIRA = alunos.reduce((acc, aluno) => acc + aluno.ira, 0);
        return alunos.length > 0 ? totalIRA / alunos.length : 0;
    };

    const mediaIRA = calcularMediaIRA();

    // Função para alternar a cor das linhas
    const handleToggleColor = () => {
        setShowColored(prevState => !prevState);
    };

    return (
        <div>
            <h2>Lista de Alunos</h2>
            <button onClick={handleToggleColor} className="btn btn-secondary mb-3">
                {showColored ? 'Voltar ao Normal' : 'Colorir Linhas'}
            </button>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Curso</th>
                        <th>IRA</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {alunos.map(aluno => (
                        <tr
                            key={aluno.id}
                            className={
                                showColored
                                    ? aluno.ira < mediaIRA
                                        ? 'table-danger' // Cor de fundo vermelho claro para abaixo da média
                                        : 'table-info' // Cor de fundo azul claro para acima da média
                                    : '' // Sem cor se não estiver em modo de colorir
                            }
                        >
                            <td>{aluno.nome}</td>
                            <td>{aluno.curso}</td>
                            <td>{aluno.ira}</td>
                            <td>
                                <Link to={`/aluno/editar/${aluno.id}`} className="btn btn-primary me-2">Editar</Link>
                                <button onClick={() => handleDelete(aluno.id)} className="btn btn-danger">Apagar</button>
                            </td>
                        </tr>
                    ))}
                   
                    <tr className="table-warning">
                        <td colSpan="3" style={{ fontWeight: 'bold', color: '#007bff' }}>Média do IRA</td>
                        <td style={{ fontWeight: 'bold', color: '#007bff' }}>{mediaIRA.toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default AlunoList;
