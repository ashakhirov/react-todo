import React, { useState } from "react";

import { StyledInput } from "./text-input.styles";

type TextInputProps = {
  onKeyAddTodo(event: React.KeyboardEvent<HTMLInputElement>, value: string): void;
};

const TextInput: React.FC<TextInputProps> = ({ onKeyAddTodo }) => {
  const [value, setValue] = useState("");

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onKeyAddTodo(event, value);
      setValue("");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <StyledInput
      type="text"
      value={value}
      onKeyDown={handleKeyDown}
      onChange={handleChange}
      placeholder="What needs to be done?"
    />
  );
};

export default TextInput;
