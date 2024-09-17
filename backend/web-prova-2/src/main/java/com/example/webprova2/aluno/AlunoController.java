package com.example.webprova2.aluno;


import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/aluno")
@Tag(name = "Aluno", description = "API for CRUD Alunos")
public class AlunoController {
    @Autowired
    private AlunoRepository alunoRepository;

    @GetMapping
    public List<Aluno> getAllAlunos() {
        return alunoRepository.findAll();
    }

    @GetMapping("/{id}")
    public Aluno getAlunoById(@PathVariable Long id) {
        return alunoRepository.findById(id).get();
    }

    @PostMapping
    public Aluno createAluno(@RequestBody Aluno aluno) {
        return alunoRepository.save(aluno);
    }

    @PutMapping("/{id}")
    public Aluno updateAluno(@PathVariable Long id, @RequestBody Aluno aluno) {
        Aluno existingUser = alunoRepository.findById(id).get();
        existingUser.setNome(aluno.getNome());
        existingUser.setCurso(aluno.getCurso());
        existingUser.setIra(aluno.getIra());
        return alunoRepository.save(existingUser);
    }

    @DeleteMapping("/{id}")
    public String deleteAluno(@PathVariable Long id) {
        try {
            alunoRepository.findById(id).get();
            alunoRepository.deleteById(id);
            return "Student deleted successfully";
        } catch (Exception e) {
            return "Student not found";
        }
    }
}
