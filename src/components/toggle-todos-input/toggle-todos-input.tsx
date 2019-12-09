import React from "react";

import { Input, Label } from "./toggle-todos-input.styles";

type ToggleTodosInputProps = {
  onToggleTodos(): void;
};

const ToggleTodosInput: React.FC<ToggleTodosInputProps> = ({ onToggleTodos }) => {
  return (
    <>
      <Input id="toggle-all" type="checkbox" onChange={onToggleTodos} />
      <Label htmlFor="toggle-all" />
    </>
  );
};

export default ToggleTodosInput;
