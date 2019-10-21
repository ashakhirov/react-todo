import React from 'react';
import PropTypes from 'prop-types';

import styles from './todo-item.module.css';

const TodoItem = ({ todos, onToggleClick }) => {
  const todoItems = todos.map((todo, i) => {
    const { id, label, completed } = todo;

    const isCompleted = completed ? 'completed' : '';

    return (
      <li key={id} className={isCompleted}>
        <div>
          <input
            type="checkbox"
            className={styles.toggle}
            onClick={() => onToggleClick(i)}
          />
          <label className={styles.label}>{label}</label>
        </div>
      </li>
    );
  });

  return (
    <>
      {todoItems}
    </>
  );
};

TodoItem.defaultProps = {
  todos: [],
};

TodoItem.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  })),
  onToggleClick: PropTypes.func.isRequired,
};

export default TodoItem;
