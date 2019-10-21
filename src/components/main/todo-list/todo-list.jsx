import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from '../todo-item/todo-item';

const TodoList = ({ todos, onToggleClick }) => {
  const todoItems = todos.map(todo => {
    return (
      <TodoItem
        key={todo.id}
        todo={todo}
        onToggleClick={onToggleClick}
      />
    );
  });

  return (
    <ul className="todo-list">
      {todoItems}
    </ul>
  );
};

TodoList.defaultProps = {
  todos: [],
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  })),
  onToggleClick: PropTypes.func.isRequired,
};

export default TodoList;
