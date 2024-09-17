package com.example.webprova2.aluno;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "alunos")
public class Aluno {

    public Aluno() {
    }

    public Aluno(Long id, float ira, String nome, String curso) {
        this.id = id;
        this.ira = ira;
        this.nome = nome;
        this.curso = curso;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private float ira;

    @Column(nullable = false, length = 50)
    private String nome;

    @Column(nullable = false, length = 50)
    private String curso;
}



