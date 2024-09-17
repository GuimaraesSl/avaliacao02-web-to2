import React, { useState, useEffect } from 'react';
import AlunoService from '../Services/AlunoService';

function ListarPorCurso() {
    const [alunos, setAlunos] = useState([]);
    const [alunosPorCurso, setAlunosPorCurso] = useState({});

    useEffect(() => {
        AlunoService.getAllAlunos().then((res) => {
            const alunosData = res.data;
            setAlunos(alunosData);

            // Agrupar alunos por curso
            const agrupadoPorCurso = alunosData.reduce((acc, aluno) => {
                (acc[aluno.curso] = acc[aluno.curso] || []).push(aluno);
                return acc;
            }, {});
            setAlunosPorCurso(agrupadoPorCurso);
        });
    }, []);

    return (
        <div>
            <h2 style={{padding: "20px"}}>Listar Por Curso</h2>
            <hr />
            {Object.entries(alunosPorCurso).map(([curso, alunos]) => (
                <div key={curso}>
                    <h3>{curso}</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>IRA</th>
                            </tr>
                        </thead>
                        <tbody>
                            {alunos.map(aluno => (
                                <tr
                                    key={aluno.id}
                                    className={
                                        aluno.ira >= 7
                                            ? 'table-success' 
                                            : 'table-danger' 
                                    }
                                >
                                    <td>{aluno.nome}</td>
                                    <td>{aluno.ira}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
}

export default ListarPorCurso;
