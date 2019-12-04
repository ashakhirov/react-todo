import React from "react";
import PropTypes from "prop-types";

import "./todo-item.css";

const TodoItem = ({ todo, onToggleClick, onDeleteClick }) => {
  const { id, label, completed } = todo;

  return (
    <li className={completed ? "completed" : ""}>
      <div>
        <input type="checkbox" className="toggle" onClick={() => onToggleClick(id)} />
        <label>{label}</label>
        <button type="button" className="destroy" onClick={() => onDeleteClick(id)} />
      </div>
    </li>
  );
};

TodoItem.defaultProps = {
  todo: {}
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }),
  onToggleClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default TodoItem;
