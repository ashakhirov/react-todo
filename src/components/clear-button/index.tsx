import React from 'react'

import { Button } from './styles'

interface Props {
  onClearCompleted(): void
}

export const ClearButton = ({ onClearCompleted }: Props) => (
  <Button type="button" onClick={onClearCompleted}>
    Clear completed
  </Button>
)
