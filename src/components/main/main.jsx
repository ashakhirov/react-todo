import React from 'react';
import PropTypes from 'prop-types';

import styles from './main.module.css';

import TodoList from './todo-list/todo-list';

const Main = ({ todos }) => {
  return (
    <main className={styles.main}>
      <TodoList todos={todos} />
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
};

export default Main;
