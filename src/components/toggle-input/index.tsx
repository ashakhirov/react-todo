import React from 'react'

import { Input, Label } from './styles'

interface ToggleInputProps {
  onToggleTodos(): void
}

export const ToggleInput = ({ onToggleTodos }: ToggleInputProps) => {
  return (
    <>
      <Input id="toggle-all" type="checkbox" onChange={onToggleTodos} />
      <Label htmlFor="toggle-all" />
    </>
  )
}
