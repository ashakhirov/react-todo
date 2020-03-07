import React from 'react'

import { Button } from './styles'

interface ClearButtonProps {
  onClearCompleted(): void
}

export const ClearButton = ({ onClearCompleted }: ClearButtonProps) => (
  <Button type="button" onClick={onClearCompleted}>
    Clear completed
  </Button>
)
