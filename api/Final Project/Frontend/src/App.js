import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const toggleDone = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].done = !updatedTasks[index].done;
    setTasks(updatedTasks);
  };

  return (
    <div className="container d-flex">
      <div className="w-full max-w-md">
        <div className="text-3xl font-semibold mb-4 text-center">My Todo List</div>
        <TodoList tasks={tasks} removeTask={removeTask} toggleDone={toggleDone} />
        <div className="mt-4">
          <TodoForm addTask={addTask} />
        </div>
      </div>
    </div>
  );
}

export default App;
