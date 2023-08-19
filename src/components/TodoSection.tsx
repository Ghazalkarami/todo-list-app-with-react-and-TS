import React, { useState } from "react";
import TodoItem from "./TodoItem";

function TodoSection() {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const deleteTodo = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-section">
      <input
        className="todo-input"
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder=" Add a new todo ... "
      />
      <button onClick={addTodo}>submit</button>
      <div className="todos">
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            text={todo}
            onDelete={() => deleteTodo(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoSection;
