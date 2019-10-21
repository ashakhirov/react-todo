import React from 'react';
import PropTypes from 'prop-types';

import styles from './item-add-input.module.css';

const ItemAddInput = ({ onTodoAdd }) => {
  return (
    <input
      type="text"
      className={styles['new-todo']}
      onKeyDown={(value) => onTodoAdd(value)}
      placeholder="What needs to be done?"
    />
  );
};

ItemAddInput.propTypes = {
  onTodoAdd: PropTypes.func.isRequired,
};

export default ItemAddInput;
