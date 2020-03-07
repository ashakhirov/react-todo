import React from 'react'

import { StyledFooter } from './styles'

import { Counter } from '../counter'
import { Filters } from '../filters'
import { Todo } from '../../lib/types'
import { ClearButton } from '../clear-button'

interface FooterProps {
  todos: Todo[]
  filter: string
  onClearCompleted(): void
  onFilterChange(event: React.MouseEvent<HTMLAnchorElement>, filter: string): void
}

export const Footer = ({ todos, filter, onClearCompleted, onFilterChange }: FooterProps) => {
  const isTodoCompleted = todos.some((todo) => todo.completed === true)

  return (
    <StyledFooter>
      <Counter todos={todos} />
      <Filters filter={filter} onFilterChange={onFilterChange} />
      {isTodoCompleted && <ClearButton onClearCompleted={onClearCompleted} />}
    </StyledFooter>
  )
}
