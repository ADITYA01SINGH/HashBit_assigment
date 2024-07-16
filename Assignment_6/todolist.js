import React, { useState, useRef } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const inputRef = useRef(null);

  const addTask = () => {
    if (task.trim() && !tasks.includes(task)) {
      setTasks([...tasks, task].sort());
      setTask('');
      inputRef.current.focus();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  const deleteTask = (taskToDelete) => {
    setTasks(tasks.filter((t) => t !== taskToDelete));
  };

  return (
    <div className="todo-list-container">
      <h1 className="title">Todo List</h1>
      <input
        className="input-task"
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Enter a new task"
        ref={inputRef}
      />
      <button className="add-button" onClick={addTask}>Add</button>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li className="task-item" key={index}>
            {task}
            <button className="delete-button" onClick={() => deleteTask(task)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;