import React from 'react';
import PropTypes from 'prop-types';

import styles from './clear-button.module.css';

const ClearButton = ({ onClearCompleted }) => {
  return (
    <button
      type="button"
      className={styles['clear-completed']}
      onClick={onClearCompleted}
    >
      Clear completed
    </button>
  );
};

ClearButton.propTypes = {
  onClearCompleted: PropTypes.func.isRequired,
};

export default ClearButton;
