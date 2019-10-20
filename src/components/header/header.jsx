import React from 'react';

import styles from './header.module.css';

const Header = () => {
  return (
    <header>
      <h1 className={styles.title}>todos</h1>
    </header>
  );
};

export default Header;
