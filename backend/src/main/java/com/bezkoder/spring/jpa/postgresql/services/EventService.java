package com.bezkoder.spring.jpa.postgresql.services;

import com.bezkoder.spring.jpa.postgresql.model.Event;

public interface EventService {

    public Iterable<Event> findAll();

    public Event save(Event event);

}
