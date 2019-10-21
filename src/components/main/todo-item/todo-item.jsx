import React from 'react';
import PropTypes from 'prop-types';

import styles from './todo-item.module.css';

const TodoItem = ({ todos }) => {
  const todoItems = todos.map(todo => {
    const { id, label } = todo;

    return (
      <li className={styles['todo-item']} key={id}>
        <div>
          <input type="checkbox" className={styles.toggle} />
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
};

export default TodoItem;
