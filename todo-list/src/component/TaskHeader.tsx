import React from 'react';

interface TaskHeaderProps {
  createdTasks: number;
  completedTasks: number;
}

const TaskHeader: React.FC<TaskHeaderProps> = ({ createdTasks, completedTasks }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="text-blue-400 font-bold">Created Tasks: {createdTasks}</div>
      <div className="text-indigo-400 font-bold">Done: {completedTasks}/{createdTasks}</div>
    </div>
  );
};

export default TaskHeader;
