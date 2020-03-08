import { useState, useEffect } from 'react'

import { Todo } from '../lib/types'

export const useLocalStorageState = (key: string, defaultValue: any = []) => {
  const getLocalStorageState = () => {
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(defaultValue))
  }

  const [state, setState] = useState<Todo[]>(getLocalStorageState())

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state))
  }, [state])

  return [state, setState] as const
}
