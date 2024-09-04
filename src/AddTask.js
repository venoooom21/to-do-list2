import React, { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [description, setDescription] = useState('');

  const handleAdd = () => {
    if (description.trim()) {
      onAdd({ id: Date.now(), description, isDone: false });
      setDescription('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add new task"
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
};

export default AddTask;