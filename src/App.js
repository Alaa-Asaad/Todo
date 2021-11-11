import React from "react";
import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";

//just to generate random id for the todos
import { v4 } from "uuid";

import TodoList from "./components/TodoList";

const App = () => {
  const [totalTodos, setTodos] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);

      console.log("Longitude is :", position.coords.longitude);
    });
  });

  const addTodo = (title, description) => {
    const newTodo = {
      id: v4(),
      title: title,
      description: description,
      createdAt: new Date(),
      Checked: false,
    };
    setTodos([...totalTodos, newTodo]);
    console.log(newTodo);
  };

  const checkTodo = (id) => {
    setTodos(
      totalTodos.map((todo) => {
        if (todo.id === id) todo.Checked = !todo.Checked;
        console.log(todo.Checked);
        return todo;
      })
    );
    console.log(id);
  };

  const deleteTodo = (id) => {
    setTodos(totalTodos.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={totalTodos}
        checkTodo={checkTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default App;
