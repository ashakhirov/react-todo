import React from "react";

import { Button } from "./clear-button.styles";

type ClearButtonProps = {
  onClearCompleted(): void;
};

const ClearButton: React.FC<ClearButtonProps> = ({ onClearCompleted }) => (
  <Button type="button" onClick={onClearCompleted}>
    Clear completed
  </Button>
);

export default ClearButton;
