// TodoList.js
import React from "react";

const TodoList = ({ tasks, removeTask, toggleDone }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} className="mb-4" style={{ textDecoration: task.done ? "line-through" : "none" }}>
          <div className="flex mb-2">
            <div className="mr-4">{task.name}</div>
            <div className="mr-4">Priority: {task.priority}</div>
            <div>Due Date: {task.dueDate.toDateString()}</div>
          </div>
          <div className="flex items-center">
            <input type="checkbox" checked={task.done} onChange={() => toggleDone(index)} className="mr-2" />
            <button onClick={() => removeTask(index)} className="bg-red-500 text-white px-2 py-1 rounded-md">Remove</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
