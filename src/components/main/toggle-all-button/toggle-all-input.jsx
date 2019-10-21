import React from 'react';
import PropTypes from 'prop-types';

import styles from './toggle-all-input.module.css';

const ToggleAllInput = ({ onToggleAll }) => {
  return (
    <>
      <input
        id="toggle-all"
        className={styles['toggle-all']}
        type="checkbox"
        onChange={() => onToggleAll()}
      />
      <label htmlFor="toggle-all" />
    </>
  );
};

ToggleAllInput.propTypes = {
  onToggleAll: PropTypes.func.isRequired,
};

export default ToggleAllInput;
