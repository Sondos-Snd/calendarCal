package com.bezkoder.spring.jpa.postgresql.controller;

import com.bezkoder.spring.jpa.postgresql.model.Calendar;
import com.bezkoder.spring.jpa.postgresql.repository.CalendarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class CalendarController {

    @Autowired
    CalendarRepository calendarRepository;

    @GetMapping("/calendar")
    public ResponseEntity<List<Calendar>> getAllCalendars(@RequestParam(required = false) String nom) {
        try {
            List<Calendar> calendars = new ArrayList<Calendar>();

            if (nom == null)
                calendarRepository.findAll().forEach(calendars::add);
            else
                calendarRepository.findByNomContaining(nom).forEach(calendars::add);

            if (calendars.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(calendars, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/calendar")
    public ResponseEntity<Calendar> createCalendar(@RequestBody Calendar calendar) {
        try {
            Calendar _calendar = calendarRepository
                    .save(new Calendar(calendar.getNom()));
            return new ResponseEntity<>(_calendar, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
