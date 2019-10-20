import React from 'react';

import styles from './filters.module.css';

const Filters = () => {
  return (
    <ul className={styles.filters}>
      <li className={styles.filter}>
        <a href="#/" className={styles.selected}>All</a>
      </li>
      <span>&nbsp;</span>
      <li className={styles.filter}>
        <a href="#/">Active</a>
      </li>
      <span>&nbsp;</span>
      <li className={styles.filter}>
        <a href="#/">Completed</a>
      </li>
    </ul>
  );
};

export default Filters;
