import React from "react";

import { Wrapper } from "./main.styles";

import TodoList from "../todo-list/todo-list";
import ToggleTodosInput from "../toggle-todos-input/toggle-todos-input";
import { Todos } from "../../App";

type MainProps = {
  todos: Todos;
  onToggleTodo(id: number): void;
  onDeleteTodo(id: number): void;
  onToggleTodos(): void;
};

const Main: React.FC<MainProps> = ({ todos, onToggleTodo, onDeleteTodo, onToggleTodos }) => {
  return (
    <Wrapper>
      <ToggleTodosInput onToggleTodos={onToggleTodos} />
      <TodoList todos={todos} onToggleTodo={onToggleTodo} onDeleteTodo={onDeleteTodo} />
    </Wrapper>
  );
};

export default Main;
