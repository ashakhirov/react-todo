import React from "react";

import { Title } from "./header.styles";
import TextInput from "../text-input/text-input";

type HeaderProps = {
  onKeyAddTodo(event: React.KeyboardEvent<HTMLInputElement>): void;
};

const Header: React.FC<HeaderProps> = ({ onKeyAddTodo }) => {
  return (
    <header>
      <Title>todos</Title>
      <TextInput onKeyAddTodo={onKeyAddTodo} />
    </header>
  );
};

export default Header;
