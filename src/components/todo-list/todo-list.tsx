import React from "react";

import TodoItem from "../todo-item/todo-item";
import { Todos } from "../../App";

type TodoListProps = {
  todos: Todos;
  onToggleTodo(id: number): void;
  onDeleteTodo(id: number): void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, onToggleTodo, onDeleteTodo }) => {
  return (
    <ul>
      {[...todos].map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onClickToggleTodo={onToggleTodo}
          onClickDeleteTodo={onDeleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
