import React from "react";
import styles from "./todo.module.css";
import axios from "axios";

const Todo = ({ todo, reloadTodos }) => {
  const toggleCompleted = () => {
    axios
      .post("/api/toggle-completed", {
        id: todo._id,
        text: todo.text,
        completed: !todo.completed,
      })
      .then(reloadTodos);
  };

  const handleDelete = () => {
    axios
      .post("/api/delete-todo", {
        id: todo._id,
      })
      .then(reloadTodos);
  };

  return (
    <>
      <lable htmlFor={`todo-toggle-${todo._id}`} className={styles.label}>
        Mark complete
      </lable>
      <input
        id={`todo-toggle-${todo._id}`}
        type="checkbox"
        checked={todo.completed}
        onChange={toggleCompleted}
        className={styles.toggle}
      ></input>
      <p className={`${styles.text} ${todo.completed && styles.completed}`}>
        {todo.text}
      </p>

      <label
        htmlFor={`todo-delete-${todo._id}`}
        className={styles.label}
      ></label>
      <button onClick={handleDelete} className={styles.delete}>
        <span role="img" aria-label="delete" title="delete this todo">
          ❌
        </span>
      </button>
    </>
  );
};

export default Todo;
