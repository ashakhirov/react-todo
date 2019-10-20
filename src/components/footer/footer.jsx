import React from 'react';

import styles from './footer.module.css';
import TodoCount from './todo-count/todo-count';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <TodoCount />
    </footer>
  );
};

export default Footer;
