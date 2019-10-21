import React, { useState } from 'react';

import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, label: 'Drink Coffee', completed: false },
    { id: 2, label: 'Read a book', completed: false },
    { id: 3, label: 'Build react app', completed: false },
  ]);

  const [filter, setFilter] = useState('all');

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

    if (key === 'Enter' && target.value) {
      const todo = {
        id: todos.length + 1,
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

  const handleClear = () => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => !todo.completed);
    });
  };

  const toggleProperty = (isCompleted) => {
    setTodos(prevTodos => {
      return prevTodos.map(({ id, label }) => {
        return {
          completed: isCompleted,
          id,
          label,
        };
      });
    });
  };

  const handleToggleAll = () => {
    const isAllCompleted = todos.every(todo => todo.completed === true);

    if (isAllCompleted) {
      toggleProperty(!isAllCompleted);
    } else {
      toggleProperty(!isAllCompleted);
    }
  };

  const filterTodos = (todos, filter) => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  };

  const handleFilterChange = (event, filter) => {
    event.preventDefault();
    setFilter(filter);
  };

  const filteredTodos = filterTodos(todos, filter);

  const content = () => {
    if (todos.length > 0) {
      return (
        <>
          <Main
            todos={filteredTodos}
            onToggleClick={(id) => handleToggle(id)}
            onDeleteClick={(id) => handleDelete(id)}
            onToggleAll={handleToggleAll}
          />
          <Footer
            todos={filteredTodos}
            filter={filter}
            onClearCompleted={() => handleClear()}
            onFilterChange={(event, filter) => handleFilterChange(event, filter)}
          />
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
