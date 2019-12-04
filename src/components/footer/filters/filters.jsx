import React from "react";
import PropTypes from "prop-types";

import styles from "./filters.module.css";

const Filters = ({ filter, onFilterChange }) => {
  const linkTemplates = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "completed", label: "Completed" }
  ];

  const links = linkTemplates.map(({ name, label }) => {
    const isActive = filter === name;
    const clazz = isActive ? styles.selected : "";

    return (
      <li key={name} className={styles.filter}>
        <a href="#/" className={clazz} onClick={event => onFilterChange(event, name)}>
          {label}
        </a>
      </li>
    );
  });

  return <ul className={styles.filters}>{links}</ul>;
};

Filters.defaultProps = {
  filter: "all"
};

Filters.propTypes = {
  filter: PropTypes.string,
  onFilterChange: PropTypes.func.isRequired
};

export default Filters;
