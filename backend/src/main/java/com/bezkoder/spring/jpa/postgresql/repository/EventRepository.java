package com.bezkoder.spring.jpa.postgresql.repository;

import com.bezkoder.spring.jpa.postgresql.model.Event;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository("eventRepository")
public interface EventRepository extends CrudRepository<Event, Long> {
    List<Event> findByRessourceId(Long ressourceId);

    @Transactional
    void deleteByRessourceId(long ressourceId);

    List<Event> findByTitleContaining(String title);
}
