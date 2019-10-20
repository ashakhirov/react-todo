import React from 'react';

import styles from './item-add-input.module.css';

const ItemAddInput = () => {
  return <input type="text" className={styles['new-todo']} placeholder="What needs to be done?" />;
};

export default ItemAddInput;
