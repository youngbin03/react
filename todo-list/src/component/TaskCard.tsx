import React from 'react';

import DeleteButton from './DeleteButton';
import { cn } from '@/src/utils/common';
import CheckBox from './atom/CheckBox';


interface TaskCardProps {
  text: string;
  onRemove: () => void;
  onUpdate: (text: string) => void;
  onDone: () => void;
  isDone?: boolean;
}

const TaskCard: React.FC<TaskCardProps> = ({ text, onRemove, onUpdate, onDone, isDone }) => {
  return (
    <div className="rounded-[8px] p-4 w-full flex gap-3 bg-gray-500 border border-gray-400 hover:border-gray-500 items-center justify-center">
      <CheckBox isDone={isDone} onClick={onDone} />
      <div
        className={cn(
          "text-start whitespace-pre font-[Inter] font-normal text-gray-100 text-[14px] grow cursor-pointer",
          isDone ? "text-gray-300 line-through" : ""
        )}
        onClick={() => {
          const newText = prompt("Enter New Text", text);
          if (newText) {
            onUpdate(newText);
          }
        }}
      >
        {text}
      </div>
      <DeleteButton onClick={onRemove} />
    </div>
  );
};

export default TaskCard;
