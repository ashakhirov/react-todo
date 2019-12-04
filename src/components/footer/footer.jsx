import React from "react";
import PropTypes from "prop-types";

import styles from "./footer.module.css";

import TodoCount from "./todo-count/todo-count";
import Filters from "./filters/filters";
import ClearButton from "./clear-button/clear-button";

const Footer = ({ todos, onClearCompleted, filter, onFilterChange }) => {
  const isTodoCompleted = todos.some(todo => todo.completed === true);
  const clearBtn = isTodoCompleted ? <ClearButton onClearCompleted={onClearCompleted} /> : null;

  return (
    <footer className={styles.footer}>
      <TodoCount todos={todos} />
      <Filters filter={filter} onFilterChange={onFilterChange} />
      {clearBtn}
    </footer>
  );
};

Footer.defaultProps = {
  todos: [],
  filter: "all"
};

Footer.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })
  ),
  onClearCompleted: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.string
};

export default Footer;
