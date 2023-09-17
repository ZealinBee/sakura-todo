import React, { useState } from "react";
import TodoItem from "./TodoItem";

function Todolist() {
  const [todos, setTodos] = useState([
    {
      name: "todo1",
      checked: false,
    },
    {
      name: "todo2",
      checked: false,
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  function addTodoFunction() {
    setTodos([
      ...todos,
      {
        name: inputValue,
        checked: false,
      },
    ]);
    setInputValue("");
  }

  function deleteFunction(name) {
    setTodos(todos.filter((todo) => todo.name !== name));
  }

  function checkFunction(name) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.name === name ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTodoFunction}>Add</button>
      {/* when i click the add button, the value inside the input will be displayed  */}

      {todos.map((todo) => {
        return (
          <TodoItem
            name={todo.name}
            onDelete={() => deleteFunction(todo.name)}
            onCheck={checkFunction}
            checked={todo.checked}
            key={todo.name}
          />
        );
      })}
    </div>
  );
}

export default Todolist;
