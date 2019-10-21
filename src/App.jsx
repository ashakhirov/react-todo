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

  const handleToggle = (index) => {
    setTodos(todos => {
      const newTodos = [...todos];
      const todo = { ...newTodos[index] };

      todo.completed = !todo.completed;
      newTodos[index] = todo;

      return newTodos;
    });
  };

  const content = () => {
    if (length > 0) {
      return (
        <>
          <Main
            todos={todos}
            onToggleClick={(index) => handleToggle(index)}
          />
          <Footer />
        </>
      );
    }

    return null;
  };

  return (
    <div>
      <Header />
      {content()}
    </div>
  );
};

export default App;
