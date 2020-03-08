import React from 'react'

import { Input, Label } from './styles'

interface Props {
  onToggleTodos(): void
}

export const ToggleInput = ({ onToggleTodos }: Props) => {
  return (
    <>
      <Input id="toggle-all" type="checkbox" onChange={onToggleTodos} />
      <Label htmlFor="toggle-all" />
    </>
  )
}
