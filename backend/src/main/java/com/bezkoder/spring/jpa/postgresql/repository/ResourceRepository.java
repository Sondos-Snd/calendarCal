package com.bezkoder.spring.jpa.postgresql.repository;
import com.bezkoder.spring.jpa.postgresql.model.Ressource;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ResourceRepository extends JpaRepository<Ressource, Long> {

    List<Ressource> findByNameContaining(String name);

}

