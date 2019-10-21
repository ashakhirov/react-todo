import React from 'react';
import PropTypes from 'prop-types';

import styles from './footer.module.css';

import TodoCount from './todo-count/todo-count';
import Filters from './filters/filters';
import ClearButton from './clear-button/clear-button';

const Footer = ({ todos, onClearCompleted }) => {
  return (
    <footer className={styles.footer}>
      <TodoCount todos={todos} />
      <Filters />
      <ClearButton
        onClearCompleted={onClearCompleted}
      />
    </footer>
  );
};

Footer.defaultProps = {
  todos: [],
};

Footer.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  })),
  onClearCompleted: PropTypes.func.isRequired,
};

export default Footer;
