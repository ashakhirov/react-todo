import React from 'react';
import PropTypes from 'prop-types';

import styles from './todo-count.module.css';

const TodoCount = ({ todos }) => {
  const count = todos.filter(({ completed }) => !completed).length;

  return (
    <span className={styles['todo-count']}>
      <strong>{count}</strong>
      <span>&nbsp;</span>
      <span>{count > 1 ? 'items' : 'item'}</span>
      <span>&nbsp;</span>
      <span>left</span>
    </span>
  );
};

TodoCount.defaultProps = {
  todos: [],
};

TodoCount.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  })),
};

export default TodoCount;
