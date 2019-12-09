import React from "react";

import { Wrapper } from "./counter.styles";
import { Todos } from "../../App";

type TodoCountProps = {
  todos: Todos;
};

const Counter: React.FC<TodoCountProps> = ({ todos }) => {
  const count = todos.filter(({ completed }) => !completed).length;

  return (
    <Wrapper>
      <strong>{count}</strong>
      <span>&nbsp;</span>
      <span>{count > 1 ? "items" : "item"}</span>
      <span>&nbsp;</span>
      <span>left</span>
    </Wrapper>
  );
};

export default Counter;
