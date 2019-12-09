import React from "react";

import { StyledFooter } from "./footer.styles";

import Counter from "../counter/counter";
import Filters from "../filters/filters";
import ClearButton from "../clear-button/clear-button";
import { Todos } from "../../App";

type FooterProps = {
  todos: Todos;
  filter: string;
  onClearCompleted(): void;
  onFilterChange(event: React.MouseEvent<HTMLAnchorElement>, filter: string): void;
};

const Footer: React.FC<FooterProps> = ({ todos, filter, onClearCompleted, onFilterChange }) => {
  const isTodoCompleted = todos.some(todo => todo.completed === true);

  return (
    <StyledFooter>
      <Counter todos={todos} />
      <Filters filter={filter} onFilterChange={onFilterChange} />
      {isTodoCompleted && <ClearButton onClearCompleted={onClearCompleted} />}
    </StyledFooter>
  );
};

export default Footer;
