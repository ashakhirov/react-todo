import React, { useState } from 'react'

import { Todo } from './lib/types'
import { GlobalStyles } from './global-styles'
import { useLocalStorageState } from './hooks'
import { Header, Main, Footer } from './components'

export const App = () => {
  const [todos, setTodos] = useLocalStorageState('todos')

  const [filter, setFilter] = useState('all')

  const handleAddTodo = (todoText: string) => {
    const todo: Todo = {
      id: todos.length + 1,
      label: todoText,
      completed: false
    }

    setTodos((prevTodos) => [...prevTodos, todo])
  }

  const handleToggleTodo = (id: number) => {
    setTodos((prevTodos) => {
      const todos = [...prevTodos]
      const index = todos.findIndex((todo) => todo.id === id)
      const todo = { ...todos[index] }

      todo.completed = !todo.completed
      todos[index] = todo

      return todos
    })
  }

  const handleDeleteTodo = (id: number) => {
    setTodos((prevTodos) => {
      const filteredTodos = prevTodos.filter((todo) => todo.id !== id)
      return filteredTodos
    })
  }

  const toggleProperty = (isCompleted: boolean) => {
    setTodos((prevTodos) => {
      const newTodos = [...prevTodos].map(({ id, label }) => ({
        completed: isCompleted,
        id,
        label
      }))

      return newTodos
    })
  }

  const handlerToggleTodos = () => {
    const isAllCompleted = todos.every((todo) => todo.completed === true)

    if (isAllCompleted) {
      toggleProperty(!isAllCompleted)
    } else {
      toggleProperty(!isAllCompleted)
    }
  }

  const handleClearCompleted = () => {
    setTodos((prevTodos) => {
      const uncompletedTodos = prevTodos.filter((todo) => !todo.completed)
      return uncompletedTodos
    })
  }

  const handleFilterChange = (event: React.MouseEvent<HTMLAnchorElement>, filter: string) => {
    event.preventDefault()
    setFilter(filter)
  }

  const filterTodos = (todos: Todo[], filter: string) => {
    switch (filter) {
      case 'active':
        return todos.filter((todo) => !todo.completed)
      case 'completed':
        return todos.filter((todo) => todo.completed)
      default:
        return todos
    }
  }

  const filteredTodos = filterTodos(todos, filter)

  return (
    <>
      <GlobalStyles />
      <Header onAddTodo={handleAddTodo} />
      {todos.length > 0 && (
        <>
          <Main
            todos={filteredTodos}
            onToggleTodo={handleToggleTodo}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodos={handlerToggleTodos}
            onEditTodo={setTodos}
          />
          <Footer
            todos={filteredTodos}
            filter={filter}
            onClearCompleted={handleClearCompleted}
            onFilterChange={handleFilterChange}
          />
        </>
      )}
    </>
  )
}
