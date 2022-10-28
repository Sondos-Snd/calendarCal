package com.bezkoder.spring.jpa.postgresql.model;

import javax.persistence.*;

@Entity
@Table(name = "ressource")
public class Ressource {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "ressgroup")
    private String ressgroup;

    public Ressource(String name) {

    }

    public Ressource(String name, String description, String group) {
        this.name = name;
        this.description = description;
        this.ressgroup = group;
    }

    public Ressource() {

    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}