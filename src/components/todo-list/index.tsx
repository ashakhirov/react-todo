import React from 'react'

import { TodoItem } from '../todo-item'
import { Todo } from '../../lib/types'

interface TodoListProps {
  todos: Todo[]
  onToggleTodo(id: number): void
  onDeleteTodo(id: number): void
}

export const TodoList = ({ todos, onToggleTodo, onDeleteTodo }: TodoListProps) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onClickToggleTodo={onToggleTodo}
          onClickDeleteTodo={onDeleteTodo}
        />
      ))}
    </ul>
  )
}
