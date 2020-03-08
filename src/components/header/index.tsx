import React from 'react'

import { Title } from './styles'
import { TextInput } from '../text-input'

interface Props {
  onAddTodo(value: string): void
}

export const Header = ({ onAddTodo }: Props) => {
  return (
    <header>
      <Title>todos</Title>
      <TextInput onAddTodo={onAddTodo} />
    </header>
  )
}
