import React from "react";

import { Li, Input, Label, Button } from "./todo-item.styles";
import { Todo } from "../../App";

type TodoItemProps = {
  todo: Todo;
  onClickToggleTodo(id: number): void;
  onClickDeleteTodo(id: number): void;
};

const TodoItem: React.FC<TodoItemProps> = ({ todo, onClickToggleTodo, onClickDeleteTodo }) => {
  const { id, label, completed } = todo;

  return (
    <Li>
      <div>
        <Input type="checkbox" completed={completed} onClick={() => onClickToggleTodo(id)} />
        <Label completed={completed}>{label}</Label>
        <Button type="button" onClick={() => onClickDeleteTodo(id)} />
      </div>
    </Li>
  );
};

export default TodoItem;
