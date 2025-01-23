import React from 'react';
import { FaTrash } from 'react-icons/fa';

const TaskItem = ({ task, onUpdateTask, onDeleteTask }) => {
  const handleToggleCompleted = () => {
    onUpdateTask(task._id, { completed: !task.completed });
  };

  const handleDelete = () => {
    onDeleteTask(task._id);
  };

  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggleCompleted}
      />
      <span>{task.title}</span>
      <button onClick={handleDelete}>
        <FaTrash />
      </button>
    </div>
  );
};

export default TaskItem;
