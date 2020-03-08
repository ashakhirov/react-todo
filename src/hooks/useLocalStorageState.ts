import { useState, useEffect } from 'react'

export const useLocalStorageState = (key: string, defaultValue: any = []) => {
  const getLocalStorageState = () => {
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(defaultValue))
  }

  const [state, setState] = useState<any[]>(getLocalStorageState())

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state))
  }, [state])

  return [state, setState] as const
}
