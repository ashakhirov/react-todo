import React, { useState } from "react";

import Header from "./components/header/header";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";

export type Todo = {
  id: number;
  label: string;
  completed: boolean;
};

export type Todos = Todo[] | [];

const App = () => {
  const getTodos = () => {
    const todos = localStorage.getItem("todos");

    if (todos) {
      return JSON.parse(todos);
    }

    return [];
  };

  const todosFromStorage = getTodos();

  const [todos, setTodos] = useState<Todos>(todosFromStorage);
  const [filter, setFilter] = useState("all");

  const putTodosInStorage = (todos: Todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const handleAddTodo = (event: React.KeyboardEvent<HTMLInputElement>, value: string) => {
    if (event.key === "Enter" && value.trim()) {
      const todo: Todo = {
        id: todos.length + 1,
        label: value.trim(),
        completed: false
      };

      setTodos(prevTodos => [...prevTodos, todo]);

      todosFromStorage.push(todo);
      putTodosInStorage(todosFromStorage);
    }
  };

  const handleToggleTodo = (id: number) => {
    setTodos(prevTodos => {
      const todos = [...prevTodos];
      const index = todos.findIndex(todo => todo.id === id);
      const todo = { ...todos[index] };

      todo.completed = !todo.completed;
      todos[index] = todo;
      putTodosInStorage(todos);

      return todos;
    });
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(prevTodos => {
      const filteredTodos = prevTodos.filter(todo => todo.id !== id);
      putTodosInStorage(filteredTodos);
      return filteredTodos;
    });
  };

  const toggleProperty = (isCompleted: boolean) => {
    setTodos(prevTodos => {
      const newTodos = [...prevTodos].map(({ id, label }) => ({
        completed: isCompleted,
        id,
        label
      }));

      putTodosInStorage(newTodos);
      return newTodos;
    });
  };

  const handlerToggleTodos = () => {
    const isAllCompleted = todos.every(todo => todo.completed === true);

    if (isAllCompleted) {
      toggleProperty(!isAllCompleted);
    } else {
      toggleProperty(!isAllCompleted);
    }
  };

  const handleClearCompleted = () => {
    setTodos(prevTodos => {
      const uncompletedTodos = prevTodos.filter(todo => !todo.completed);
      putTodosInStorage(uncompletedTodos);
      return uncompletedTodos;
    });
  };

  const handleFilterChange = (event: React.MouseEvent<HTMLAnchorElement>, filter: string) => {
    event.preventDefault();
    setFilter(filter);
  };

  const filterTodos = (todos: Todos, filter: string) => {
    switch (filter) {
      case "active":
        return todos.filter(todo => !todo.completed);
      case "completed":
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  };

  const filteredTodos = filterTodos(todos, filter);

  return (
    <div>
      <Header onAddTodo={handleAddTodo} />
      {todos.length > 0 && (
        <>
          <Main
            todos={filteredTodos}
            onToggleTodo={handleToggleTodo}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodos={handlerToggleTodos}
          />
          <Footer
            todos={filteredTodos}
            filter={filter}
            onClearCompleted={handleClearCompleted}
            onFilterChange={handleFilterChange}
          />
        </>
      )}
    </div>
  );
};

export default App;