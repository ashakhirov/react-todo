import React from "react";
import PropTypes from "prop-types";

import styles from "./main.module.css";

import TodoList from "./todo-list/todo-list";
import ToggleAllInput from "./toggle-all-button/toggle-all-input";

const Main = ({ todos, onToggleClick, onDeleteClick, onToggleAll }) => {
  return (
    <main className={styles.main}>
      <ToggleAllInput onToggleAll={onToggleAll} />
      <TodoList todos={todos} onToggleClick={onToggleClick} onDeleteClick={onDeleteClick} />
    </main>
  );
};

Main.defaultProps = {
  todos: []
};

Main.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })
  ),
  onToggleClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onToggleAll: PropTypes.func.isRequired
};

export default Main;
