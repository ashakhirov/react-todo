import React from 'react';

import styles from './todo-count.module.css';

const TodoCount = () => {
  return (
    <span className={styles['todo-count']}>
      <strong>0</strong>
      <span>&nbsp;</span>
      <span>items</span>
      <span>left</span>
    </span>
  );
};

export default TodoCount;
