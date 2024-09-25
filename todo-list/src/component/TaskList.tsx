import React from 'react';
import TaskHeader from './TaskHeader';
import TaskCard from './TaskCard';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, setTasks }) => {
  const completedTasks = tasks.filter(task => task.completed).length;

  const handleRemove = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleUpdate = (id: number, newText: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, title: newText } : task
    ));
  };

  const handleToggleDone = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <main className="flex flex-col mt-16 max-w-full w-[736px] max-md:mt-10">
      <TaskHeader createdTasks={tasks.length} completedTasks={completedTasks} />
      <section className="flex flex-col mt-6 w-full text-sm leading-snug min-h-[392px] text-zinc-100 max-md:max-w-full">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            text={task.title}
            isDone={task.completed}
            onRemove={() => handleRemove(task.id)}
            onUpdate={(newText) => handleUpdate(task.id, newText)}
            onDone={() => handleToggleDone(task.id)}
          />
        ))}
      </section>
    </main>
  );
};

export default TaskList;
