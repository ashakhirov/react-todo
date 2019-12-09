import React from "react";

import { Wrapper } from "./main.styles";

import TodoList from "../todo-list/todo-list";
import ToggleTodosInput from "../toggle-todos-input/toggle-todos-input";
import { Todos } from "../../App";

type MainProps = {
  todos: Todos;
  onClickToggleTodo(id: number): void;
  onClickDeleteTodo(id: number): void;
  onClickToggleTodos(): void;
};

const Main: React.FC<MainProps> = ({
  todos,
  onClickToggleTodo,
  onClickDeleteTodo,
  onClickToggleTodos
}) => {
  return (
    <Wrapper>
      <ToggleTodosInput onClickToggleTodos={onClickToggleTodos} />
      <TodoList
        todos={todos}
        onClickToggleTodo={onClickToggleTodo}
        onClickDeleteTodo={onClickDeleteTodo}
      />
    </Wrapper>
  );
};

export default Main;
