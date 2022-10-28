package com.bezkoder.spring.jpa.postgresql.model;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
@Entity
@Table(name = "events")
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "title")
    private String title;
    @JsonFormat(pattern="dd/mm/yyyy HH:mm", shape = JsonFormat.Shape.STRING)
    @Column(name = "startEvent")
    private String startEvent;

    @JsonFormat(pattern="dd/mm/yyyy HH:mm", shape = JsonFormat.Shape.STRING)
    @Column(name = "endEvent")
    private String endEvent;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "resource_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private Ressource ressource;

    public Event() {

    }

    public Event(String title, String startEvent, String endEvent,Ressource resourceId) {
        this.title = title;
        this.startEvent = startEvent;
        this.endEvent = endEvent;
        this.ressource=resourceId;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getStartEvent() {
        return startEvent;
    }

    public void setStartEvent(String startEvent) {
        this.startEvent = startEvent;
    }

    public String getEndEvent() {
        return endEvent;
    }

    public void setEndEvent(String endEvent) {
        this.endEvent = endEvent;
    }

    public Ressource getRessource() {
        return ressource;
    }

    public void setRessource(Ressource ressource) {
        this.ressource = ressource;
    }
}

