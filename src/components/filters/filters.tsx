import React from "react";

import { SelectedAnchor, Filter, Wrapper } from "./filters.styles";

type FiltersProps = {
  filter: string;
  onFilterChange(event: React.MouseEvent<HTMLAnchorElement>, filter: string): void;
};

const Filters: React.FC<FiltersProps> = ({ filter, onFilterChange }) => {
  const linkTemplates = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "completed", label: "Completed" }
  ];

  const links = linkTemplates.map(({ name, label }) => {
    const isActive = filter === name;

    return (
      <Filter key={name}>
        {isActive ? (
          <SelectedAnchor>{label}</SelectedAnchor>
        ) : (
          <a href="#/" onClick={event => onFilterChange(event, name)}>
            {label}
          </a>
        )}
      </Filter>
    );
  });

  return <Wrapper>{links}</Wrapper>;
};

export default Filters;
