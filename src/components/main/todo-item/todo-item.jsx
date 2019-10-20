import React from 'react';

import styles from './todo-item.module.css';

const TodoItem = () => {
  return (
    <li className={styles['todo-item']}>
      <div>
        <input type="checkbox" className={styles.toggle} />
        <label className={styles.label}>Drink Coffee</label>
      </div>
    </li>
  );
};

export default TodoItem;
