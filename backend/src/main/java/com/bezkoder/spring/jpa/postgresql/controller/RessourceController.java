package com.bezkoder.spring.jpa.postgresql.controller;
import com.bezkoder.spring.jpa.postgresql.model.Ressource;
import com.bezkoder.spring.jpa.postgresql.repository.ResourceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;



@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class RessourceController {

    @Autowired
    ResourceRepository ressourceRepository;


    @GetMapping("/ressources")
    public ResponseEntity<List<Ressource>> getAllRessources(@RequestParam(required = false) String name) {
        List<Ressource> ressources = new ArrayList<Ressource>();

        if (name == null)
            ressourceRepository.findAll().forEach(ressources::add);
        else
            ressourceRepository.findByNameContaining(name).forEach(ressources::add);

        if (ressources.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<>(ressources, HttpStatus.OK);
    }

    @GetMapping("/ressources/{id}")
    public ResponseEntity<Ressource> getRessourceById(@PathVariable("id") long id) {
        Ressource ressource = ressourceRepository.findById(id)
                .orElseThrow(() -> new RuntimeException());

        return new ResponseEntity<>(ressource, HttpStatus.OK);
    }

    @PostMapping("/ressources")
    public ResponseEntity<Ressource> createRessource(@RequestBody Ressource ressource) {
        Ressource _ressource = ressourceRepository.save(new Ressource(ressource.getName(),"descr","group"));
        return new ResponseEntity<>(_ressource, HttpStatus.CREATED);
    }

    @PutMapping("/ressources/{id}")
    public ResponseEntity<Ressource> updateRessource(@PathVariable("id") long id, @RequestBody Ressource ressource) {
        Ressource _ressource = ressourceRepository.findById(id)
                .orElseThrow(() -> new RuntimeException());

        _ressource.setName(ressource.getName());

        return new ResponseEntity<>(ressourceRepository.save(_ressource), HttpStatus.OK);
    }

    @DeleteMapping("/ressources/{id}")
    public ResponseEntity<HttpStatus> deleteressource(@PathVariable("id") long id) {
        ressourceRepository.deleteById(id);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping("/ressources")
    public ResponseEntity<HttpStatus> deleteAllRessources() {
        ressourceRepository.deleteAll();

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}



