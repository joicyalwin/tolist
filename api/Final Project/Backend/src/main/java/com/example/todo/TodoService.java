package com.example.todo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService {

    private final TodoRepository todoRepository;

    @Autowired
    public TodoService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    public List<Todo> getAllTodos() {
        return todoRepository.findAll();
    }

    public Todo getTodoById(Long id) {
        return todoRepository.findById(id).orElse(null);
    }

    public Todo createTodo(Todo todo) {
        return todoRepository.save(todo);
    }

    public Todo updateTodo(Long id, Todo todo) {
        Todo existingTodo = todoRepository.findById(id).orElse(null);
        if (existingTodo != null) {
            // Update properties of existingTodo with values from the incoming todo
            existingTodo.setName(todo.getName());
            existingTodo.setPriority(todo.getPriority());
            existingTodo.setDueDate(todo.getDueDate());
            existingTodo.setDone(todo.isDone());

            // Save the updated todo
            return todoRepository.save(existingTodo);
        }
        return null;
    }

    public void deleteTodo(Long id) {
        todoRepository.deleteById(id);
    }
}
