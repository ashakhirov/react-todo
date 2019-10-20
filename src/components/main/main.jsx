import React from 'react';

import styles from './main.module.css';

import TodoList from './todo-list/todo-list';

const Main = () => {
  return (
    <main className={styles.main}>
      <TodoList />
      <TodoList />
    </main>
  );
};

export default Main;
