import React from 'react';

interface DeleteButtonProps {
  onClick: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick }) => {
  return (
    <button className="w-6 h-6 flex justify-center items-center bg-red-500 rounded-full" onClick={onClick}>
      <span className="text-white">X</span>
    </button>
  );
};

export default DeleteButton;
