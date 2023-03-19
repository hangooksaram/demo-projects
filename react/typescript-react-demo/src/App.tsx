import React, { useState } from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import { Todo } from "./todo.model";
function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: new Date().toISOString(), text: "finish" },
  ]);
  const addTodoHandler = (text: string) => {
    setTodos((prevState) => [
      ...prevState,
      { id: new Date().toISOString(), text: text },
    ]);
  };

  const deleteTodoHandler = (todoId: string) => {
    setTodos((prevState) => {
      return prevState.filter((state) => state.id !== todoId);
    });
  };
  return (
    <div className="App">
      <TodoList onDeleteTodo={deleteTodoHandler} todoList={todos}></TodoList>
      <NewTodo onAddTodo={addTodoHandler}></NewTodo>
    </div>
  );
}

export default App;
