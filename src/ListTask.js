import React from 'react';
import Task from './Task';

const ListTask = ({ tasks, onEdit, onToggle }) => {
  return (
    <div>
      {tasks.map(task => (
        <Task key={task.id} task={task} onEdit={onEdit} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default ListTask;