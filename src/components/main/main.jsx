import React from 'react';
import PropTypes from 'prop-types';

import styles from './main.module.css';

import TodoList from './todo-list/todo-list';

const Main = ({ todos, onToggleClick }) => {
  return (
    <main className={styles.main}>
      <TodoList todos={todos} onToggleClick={onToggleClick} />
    </main>
  );
};

Main.defaultProps = {
  todos: [],
};

Main.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  })),
  onToggleClick: PropTypes.func.isRequired,
};

export default Main;
