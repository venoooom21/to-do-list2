import React, { useState } from 'react';

const Task = ({ task, onEdit, onToggle }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleEdit = () => {
    onEdit(task.id, newDescription);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
            {task.description}
          </span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onToggle(task.id)}>
            {task.isDone ? 'Undo' : 'Done'}
          </button>
        </>
      )}
    </div>
  );
};

export default Task;