import React from "react";

import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div>
      {props.todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            title={todo.title}
            description={todo.description}
            checkTodo={props.checkTodo}
            id={todo.id}
            Checked={todo.Checked}
            deleteTodo={props.deleteTodo}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
