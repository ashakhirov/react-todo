import React from 'react'

import { TodoItem } from '../todo-item'
import { Todo } from '../../lib/types'

interface Props {
  todos: Todo[]
  onToggleTodo(id: number): void
  onDeleteTodo(id: number): void
  onEditTodo: React.Dispatch<React.SetStateAction<any[]>>
}

export const TodoList = ({ todos, onToggleTodo, onDeleteTodo, onEditTodo }: Props) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onClickToggleTodo={onToggleTodo}
          onClickDeleteTodo={onDeleteTodo}
          onEditTodo={onEditTodo}
        />
      ))}
    </ul>
  )
}
