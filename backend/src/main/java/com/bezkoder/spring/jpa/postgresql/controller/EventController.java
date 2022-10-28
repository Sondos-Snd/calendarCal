package com.bezkoder.spring.jpa.postgresql.controller;
import com.bezkoder.spring.jpa.postgresql.model.Event;
import com.bezkoder.spring.jpa.postgresql.model.Ressource;
import com.bezkoder.spring.jpa.postgresql.repository.EventRepository;
import com.bezkoder.spring.jpa.postgresql.repository.ResourceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class EventController {

    @Autowired
    EventRepository eventRepository;
    @Autowired
    ResourceRepository ressourceRepository;

    @GetMapping("/resources/{resourceId}/events")
    public ResponseEntity<List<Event>> getAllEventsByRessourceId(@PathVariable(value = "resourceId") Long ressourceId) {
        if (!ressourceRepository.existsById(ressourceId)) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        List<Event> events = eventRepository.findByRessourceId(ressourceId);
        return new ResponseEntity<>(events, HttpStatus.OK);
    }

    @GetMapping("/events/{id}")
    public ResponseEntity<Event> getEventsByRessourceId(@PathVariable(value = "id") Long id) {
        Event event = eventRepository.findById(id)
                .orElseThrow(() -> new RuntimeException());

        return new ResponseEntity<>(event, HttpStatus.OK);
    }

    @GetMapping("/events")
    public ResponseEntity<List<Event>> getAllEvents(@RequestParam(required = false) String title) {
        List<Event> events = new ArrayList<Event>();

        if (title == null)
            eventRepository.findAll().forEach(events::add);
        else
            eventRepository.findByTitleContaining(title).forEach(events::add);

        if (events.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<>(events, HttpStatus.OK);
    }

    @DeleteMapping("/events/{id}")
    public ResponseEntity<HttpStatus> deleteEvent(@PathVariable("id") long id) {
        eventRepository.deleteById(id);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PostMapping("/ressources/{ressourceId}/events")
    public ResponseEntity<Event> createEvent(@PathVariable(value = "ressourceId") Long ressourceId,
                                                 @RequestBody Event eventRequest) {
        Event event = ressourceRepository.findById(ressourceId).map(ressource -> {
            eventRequest.setRessource(ressource);
            return eventRepository.save(eventRequest);
        }).orElseThrow(() -> new RuntimeException());

        return new ResponseEntity<>(event, HttpStatus.CREATED);
    }

}