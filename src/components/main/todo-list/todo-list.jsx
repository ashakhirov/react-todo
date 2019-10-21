import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from '../todo-item/todo-item';

const TodoList = ({ todos }) => {
  return (
    <ul className="todo-list">
      <TodoItem todos={todos} />
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
};

export default TodoList;
