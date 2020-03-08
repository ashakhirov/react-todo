import React from 'react'

import { Wrapper } from './styles'

import { Todo } from '../../lib/types'
import { TodoList } from '../todo-list'
import { ToggleInput } from '../toggle-input'

interface Props {
  todos: Todo[]
  onToggleTodo(id: number): void
  onDeleteTodo(id: number): void
  onToggleTodos(): void
  onEditTodo: React.Dispatch<React.SetStateAction<any[]>>
}

export const Main = ({ todos, onToggleTodo, onDeleteTodo, onToggleTodos, onEditTodo }: Props) => {
  return (
    <Wrapper>
      <ToggleInput onToggleTodos={onToggleTodos} />
      <TodoList
        todos={todos}
        onToggleTodo={onToggleTodo}
        onEditTodo={onEditTodo}
        onDeleteTodo={onDeleteTodo}
      />
    </Wrapper>
  )
}
