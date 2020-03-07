import React, { useMemo } from 'react'

import { Wrapper } from './styles'
import { Todo } from '../../lib/types'

interface TodoCountProps {
  todos: Todo[]
}

export const Counter = ({ todos }: TodoCountProps) => {
  const count = useMemo(() => todos.filter(({ completed }) => !completed).length, [todos])

  return (
    <Wrapper>
      <strong>{count}</strong>
      <span>&nbsp;</span>
      <span>{count > 1 ? 'items' : 'item'}</span>
      <span>&nbsp;</span>
      <span>left</span>
    </Wrapper>
  )
}
