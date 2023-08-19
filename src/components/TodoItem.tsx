import React from "react";

interface TodoItemProps {
  text: string;
  onDelete: () => void;
}

function TodoItem({ text, onDelete }: TodoItemProps) {
  return (
    <div className="todo-item">
      <span className="todo-text">{text}</span>
      <button className="delete-button" onClick={onDelete}>
        🗑️
      </button>
    </div>
  );
}

export default TodoItem;
