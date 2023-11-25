// TodoForm.js
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TodoForm = ({ addTask }) => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("low");
  const [dueDate, setDueDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;

    const newTask = {
      name: task,
      priority,
      dueDate,
      done: false,
    };

    addTask(newTask);
    setTask("");
    setPriority("low");
    setDueDate(new Date());
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="text"
        placeholder="Add a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="border p-2 rounded-md"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="border p-2 rounded-md"
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <DatePicker
        selected={dueDate}
        onChange={(date) => setDueDate(date)}
        className="border p-2 rounded-md"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white font-medium p-2 rounded-md"
      >
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
