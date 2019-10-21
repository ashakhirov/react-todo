import React from 'react';
import PropTypes from 'prop-types';

import styles from './todo-count.module.css';

const TodoCount = ({ count }) => {
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
  count: 0,
};

TodoCount.propTypes = {
  count: PropTypes.number,
};

export default TodoCount;
