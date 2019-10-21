import React, { useState, useMemo } from 'react';

import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, label: 'Drink Coffee', completed: false },
    { id: 2, label: 'Read a book', completed: false },
    { id: 3, label: 'Build react app', completed: false },
  ]);

  const length = useMemo(() => todos.length, [todos]);

  const handleToggle = (id) => {
    setTodos(prevTodos => {
      const todos = [...prevTodos];
      const index = todos.findIndex(todo => todo.id === id);
      const todo = { ...todos[index] };

      todo.completed = !todo.completed;
      todos[index] = todo;

      return todos;
    });
  };

  const handleDelete = (id) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== id);
    });
  };

  const handleTodoAdd = (event) => {
    const { target, key } = event;

    if (key === 'Enter') {
      const todo = {
        id: length + 1,
        label: target.value,
        completed: false,
      };

      setTodos(prevTodos => {
        const todos = [...prevTodos, todo];
        return todos;
      });

      target.value = '';
    }
  };

  const content = () => {
    if (length > 0) {
      return (
        <>
          <Main
            todos={todos}
            onToggleClick={(id) => handleToggle(id)}
            onDeleteClick={(id) => handleDelete(id)}
          />
          <Footer />
        </>
      );
    }

    return null;
  };

  return (
    <div>
      <Header onTodoAdd={(event) => handleTodoAdd(event)} />
      {content()}
    </div>
  );
};

export default App;
