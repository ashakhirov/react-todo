import React from 'react';

import styles from './item-add-form.module.css';

const ItemAddForm = () => {
  return (
    <form>
      <input type="text" className={styles['new-todo']} placeholder="What needs to be done?" />
    </form>
  );
};

export default ItemAddForm;
