import axios from 'axios';

const BASE_URL = 'http://localhost:7070/aluno';

const getAllAlunos = () => {
    return axios.get(BASE_URL);
};

const getAluno = (id) => {
    return axios.get(`${BASE_URL}/${id}`);
};

const createAluno = (aluno) => {
    console.log(aluno)
    return axios.post(BASE_URL, aluno);
};

const updateAluno = (id, aluno) => {
    return axios.put(`${BASE_URL}/${id}`, aluno);
};

const deleteAluno = (id) => {
    return axios.delete(`${BASE_URL}/${id}`);
};

export default {
    getAllAlunos,
    getAluno,
    createAluno,
    updateAluno,
    deleteAluno,
};