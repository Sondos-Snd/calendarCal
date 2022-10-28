package com.bezkoder.spring.jpa.postgresql.services;

import com.bezkoder.spring.jpa.postgresql.model.Event;
import com.bezkoder.spring.jpa.postgresql.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("eventService")
public class EventServiceImpl implements EventService{

    @Autowired
    private EventRepository eventRepository;

    @Override
    public Iterable<Event> findAll() {
        return eventRepository.findAll();
    }

    @Override
    public Event save(Event event) {
        return eventRepository.save(event);
    }
}
