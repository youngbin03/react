import React from 'react';

interface CheckBoxProps {
  isDone?: boolean;
  onClick: () => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({ isDone, onClick }) => {
  return (
    <div className="w-6 h-6 flex justify-center items-center cursor-pointer" onClick={onClick}>
      {isDone ? (
        <span className="block w-full h-full bg-green-500 rounded-full"></span>
      ) : (
        <span className="block w-full h-full border-2 border-gray-500 rounded-full"></span>
      )}
    </div>
  );
};

export default CheckBox;
