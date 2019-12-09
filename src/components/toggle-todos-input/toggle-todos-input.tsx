import React from "react";

import { Input, Label } from "./toggle-todos-input.styles";

type ToggleTodosInputProps = {
  onClickToggleTodos(): void;
};

const ToggleTodosInput: React.FC<ToggleTodosInputProps> = ({ onClickToggleTodos }) => {
  return (
    <>
      <Input id="toggle-all" type="checkbox" onChange={onClickToggleTodos} />
      <Label htmlFor="toggle-all" />
    </>
  );
};

export default ToggleTodosInput;
