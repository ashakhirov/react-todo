import React, { useState } from 'react'

import { StyledInput } from './styles'

interface TextInputProps {
  onAddTodo(value: string): void
}

export const TextInput = ({ onAddTodo }: TextInputProps) => {
  const [value, setValue] = useState('')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    onAddTodo(value)
    setValue('')
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setValue(value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="What needs to be done?"
      />
    </form>
  )
}
