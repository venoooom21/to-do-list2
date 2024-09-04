import React, { useState } from 'react';
import AddTask from './AddTask';
import ListTask from './ListTask';
import './styles.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const editTask = (id, newDescription) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, description: newDescription } : task
    ));
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, isDone: !task.isDone } : task
    ));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'done') return task.isDone;
    if (filter === 'not_done') return !task.isDone;
    return true; 
  });

  return (
    <div>
      <h1>To-Do List</h1>
      <AddTask onAdd={addTask} />
      <div>
        <button onClick={() => setFilter('all')}>All</button>
javascript
Copier le code
        <button onClick={() => setFilter('done')}>Done</button>
        <button onClick={() => setFilter('not_done')}>Not Done</button>
      </div>
      <ListTask tasks={filteredTasks} onEdit={editTask} onToggle={toggleTask} />
    </div>
  );
};

export default App;