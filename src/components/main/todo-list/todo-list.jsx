import React from 'react';

import TodoItem from '../todo-item/todo-item';

const TodoList = () => {
  return (
    <ul className="todo-list">
      <TodoItem />
    </ul>
  );
};

export default TodoList;
