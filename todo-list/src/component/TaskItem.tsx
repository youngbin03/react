import React from 'react';
import Trash from "../../../public/assets/trash.png";

interface Task {
  id: number;
  title: string;
  completed: boolean;
  iconSrc: string;
}

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  return (
    <article className={`flex flex-wrap gap-3 items-start p-4 mt-3 w-full rounded-lg border border-solid shadow-sm ${task.completed ? 'bg-neutral-800 border-neutral-800 text-zinc-500' : 'bg-neutral-800 border-zinc-800'} max-md:max-w-full`}>
      <img loading="lazy" src={task.iconSrc} alt="" className="object-contain shrink-0 w-6 aspect-square" />
      <div className="flex-1 shrink basis-0 max-md:max-w-full">{task.title}</div>
      <img loading="lazy" src={Trash.src} alt="This is Trash Vector" className="object-contain shrink-0 w-6 rounded aspect-square" />
    </article>
  );
};

export default TaskItem;