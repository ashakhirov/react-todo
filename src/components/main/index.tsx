import React from 'react'

import { Wrapper } from './styles'

import { Todo } from '../../lib/types'
import { TodoList } from '../todo-list'
import { ToggleInput } from '../toggle-input'

interface MainProps {
  todos: Todo[]
  onToggleTodo(id: number): void
  onDeleteTodo(id: number): void
  onToggleTodos(): void
}

export const Main = ({ todos, onToggleTodo, onDeleteTodo, onToggleTodos }: MainProps) => {
  return (
    <Wrapper>
      <ToggleInput onToggleTodos={onToggleTodos} />
      <TodoList todos={todos} onToggleTodo={onToggleTodo} onDeleteTodo={onDeleteTodo} />
    </Wrapper>
  )
}
