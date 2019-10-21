import React from 'react';

import styles from './filters.module.css';

const Filters = () => {
  return (
    <ul className={styles.filters}>
      <li className={styles.filter}>
        <a href="#/" className={styles.selected}>All</a>
      </li>
      <li className={styles.filter}>
        <a href="#/">Active</a>
      </li>
      <li className={styles.filter}>
        <a href="#/">Completed</a>
      </li>
    </ul>
  );
};

export default Filters;
