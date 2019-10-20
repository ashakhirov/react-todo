import React from 'react';

import styles from './footer.module.css';

import TodoCount from './todo-count/todo-count';
import Filters from './filters/filters';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <TodoCount />
      <Filters />
    </footer>
  );
};

export default Footer;
