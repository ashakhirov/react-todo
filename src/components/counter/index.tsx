import React, { useMemo } from 'react'

import { Wrapper } from './styles'
import { Todo } from '../../lib/types'

interface Props {
  todos: Todo[]
}

export const Counter = ({ todos }: Props) => {
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
