import React from 'react'

import { Todo } from '../../lib/types'
import { Li, Input, Label, Button } from './styles'

interface TodoItemProps {
  todo: Todo
  onClickToggleTodo(id: number): void
  onClickDeleteTodo(id: number): void
}

export const TodoItem = ({
  todo: { id, label, completed },
  onClickToggleTodo,
  onClickDeleteTodo
}: TodoItemProps) => {
  return (
    <Li>
      <div>
        <Input type="checkbox" completed={completed} onClick={() => onClickToggleTodo(id)} />
        <Label completed={completed}>{label}</Label>
        <Button type="button" onClick={() => onClickDeleteTodo(id)} />
      </div>
    </Li>
  )
}
