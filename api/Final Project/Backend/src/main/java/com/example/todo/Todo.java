package com.example.todo;
import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "todos")
public class Todo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String priority;
    private Date dueDate;
    private boolean done;

    // Constructors, getters, and setters

    // Constructors
    public Todo() {
    }

    public Todo(String name, String priority, Date dueDate, boolean done) {
        this.name = name;
        this.priority = priority;
        this.dueDate = dueDate;
        this.done = done;
    }

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    public Date getDueDate() {
        return dueDate;
    }

    public void setDueDate(Date dueDate) {
        this.dueDate = dueDate;
    }

    public boolean isDone() {
        return done;
    }

    public void setDone(boolean done) {
        this.done = done;
    }

    // Other methods if needed
}
