import React, { useState, useRef, useEffect } from 'react'

import { Todo } from '../../lib/types'
import { Li, Input, Label, Button, EditInput, Wrapper } from './styles'

interface Props {
  todo: Todo
  onClickToggleTodo(id: number): void
  onClickDeleteTodo(id: number): void
  onEditTodo: React.Dispatch<React.SetStateAction<any[]>>
}

const ESC_KEY = 27
const ENTER_KEY = 13

export const TodoItem = ({
  todo: { id, label, completed },
  onClickToggleTodo,
  onClickDeleteTodo,
  onEditTodo
}: Props) => {
  const [value, setValue] = useState(label)
  const [editable, setEditable] = useState(false)

  const editInputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (editInputRef.current && editable) {
      editInputRef.current.focus()
    }
  }, [editable])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setValue(value)
    onEditTodo((prevTodos) => {
      const newTodos = [...prevTodos]
      const index = newTodos.findIndex((todo) => todo.id === id)
      const todo = { ...newTodos[index] }
      todo.label = value
      newTodos[index] = todo
      return newTodos
    })
  }

  const handleDoubleClick = () => {
    setEditable(true)
  }

  const handleBlur = () => {
    setEditable(false)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.which === ENTER_KEY || event.which === ESC_KEY) {
      setEditable(false)
    }
  }

  return (
    <Li editable={editable} onDoubleClick={handleDoubleClick}>
      <Wrapper>
        <Input
          type="checkbox"
          checked={completed}
          completed={completed}
          onChange={() => onClickToggleTodo(id)}
        />
        <Label completed={completed}>{label}</Label>
        <Button type="button" onClick={() => onClickDeleteTodo(id)} />
      </Wrapper>
      <EditInput
        ref={editInputRef}
        type="text"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
      />
    </Li>
  )
}
