import React from "react";

import TodoItem from "../todo-item/todo-item";
import { Todos } from "../../App";

type TodoListProps = {
  todos: Todos;
  onClickToggleTodo(id: number): void;
  onClickDeleteTodo(id: number): void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, onClickToggleTodo, onClickDeleteTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onClickToggleTodo={onClickToggleTodo}
          onClickDeleteTodo={onClickDeleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
