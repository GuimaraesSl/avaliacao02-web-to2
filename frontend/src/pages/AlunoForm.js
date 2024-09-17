import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AlunoService from '../Services/AlunoService';

function AlunoForm() {
    const [nome, setNome] = useState('');
    const [curso, setCurso] = useState('');
    const [ira, setIra] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            AlunoService.getAluno(id).then((res) => {
                setNome(res.data.nome);
                setCurso(res.data.curso);
                setIra(res.data.ira);
            });
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const aluno = { ira: Number(ira), nome, curso }

        if (id) {
            AlunoService.updateAluno(id, aluno).then(() => navigate('/aluno/listar'));
        } else {
            AlunoService.createAluno(aluno).then(() => navigate('/aluno/listar'));
        }
    };

    const handleDelete = () => {
        if (id) {
            AlunoService.deleteAluno(id).then(() => {
                navigate('/listar');
            });
        }
    };

    return (
        <div>
            <h2>{id ? 'Editar Aluno' : 'Criar Aluno'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Nome</label>
                    <input className="form-control" value={nome} onChange={(e) => setNome(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label>Curso</label>
                    <input className="form-control" value={curso} onChange={(e) => setCurso(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label>IRA</label>
                    <input type="number" className="form-control" value={ira} onChange={(e) => setIra(e.target.value)} />
                </div>
                <button className="btn btn-primary" type="submit">Salvar</button>
                {id && (
                    <button className="btn btn-danger" type="button" onClick={handleDelete}>Excluir</button>
                )}
            </form>
        </div>
    );
}

export default AlunoForm;