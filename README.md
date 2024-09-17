# avaliacao02-web-to2
Segunda Avaliacão de Desenvolvimento Web - Turma T02 - Professor Jefferson Carvalho

## Alunos:
- Gabriel Al-Samir Guimarães Sales - 536030
- Mariana Aparecida Hofer Gama - 535809

## 📚 Documentação

A documentação da API está disponível no Swagger, que pode ser acessado através no localhost na porta 7070 após a execução do projeto no link `http://localhost:7070/swagger-ui/index.html#/`.

## 🚀 Como rodar

### Requisitos

Para executar o projeto é necessário ter instalado as seguintes ferramentas:

- ☕ [java opensdk21 ou superior](https://openjdk.java.net)
- 🐋 [docker](https://docker.com)
- 🚢 [docker-compose](https://docs.docker.com/compose)

### Execução

Agora que você já possui as ferramentas necessárias, siga os passos abaixo para executar o projeto:

1. Clone o repositório:

    ```bash
    git clone https://github.com/HandleServices/handle-work-service
    ```

2. Acesse a pasta do backend e rode o comando abaixo para subir o banco de dados:

    ```bash
    cd backend/web-prova-2
    docker compose up -d
    ```

    Esse comando irá subir um container docker com o banco de dados PostgreSQL e a aplicação Java do Backend.

4. Acesse a documentação da API:

    Acesse a documentação da API no link `http://localhost:7070/swagger-ui/index.html#/`.
5. Acesse a pasta frontend e baixe as dependências do projeto:
  ```bash
  cd ..
  cd frontend
  npm i
  ```
6. Rode o frontend do projeto:
```bash
npm start
```
