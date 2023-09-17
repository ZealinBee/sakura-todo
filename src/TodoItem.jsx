import React from "react";

function TodoItem({ name, onDelete, onCheck, checked }) {
  return (
    <div>
      <p className={checked ? "checked" : "unchecked"}>{name}</p>
      <button onClick={onDelete}>delete</button>
      <button onClick={() => onCheck(name)}>check</button>
    </div>
  );
}

export default TodoItem;
