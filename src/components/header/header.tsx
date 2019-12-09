import React from "react";

import { Title } from "./header.styles";
import TextInput from "../text-input/text-input";

type HeaderProps = {
  onAddTodo(event: React.KeyboardEvent<HTMLInputElement>, value: string): void;
};

const Header: React.FC<HeaderProps> = ({ onAddTodo }) => {
  return (
    <header>
      <Title>todos</Title>
      <TextInput onAddTodo={onAddTodo} />
    </header>
  );
};

export default Header;
