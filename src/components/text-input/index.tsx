import React, { useState, useRef, useEffect } from 'react'

import { StyledInput } from './styles'

interface Props {
  onAddTodo(value: string): void
}

export const TextInput = ({ onAddTodo }: Props) => {
  const [value, setValue] = useState('')

  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    onAddTodo(value.trim())
    setValue('')
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setValue(value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <StyledInput
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="What needs to be done?"
      />
    </form>
  )
}
