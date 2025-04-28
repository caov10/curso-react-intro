import './TodoCounter.css';
import { TodoContext } from '../TodoContext';
import React from 'react';
function TodoCounter() {
  const {
completedTodos,
totalTodos,
  } = React.useContext(TodoContext);
  return (
  <h1>
          Has completado {completedTodos} de  {totalTodos}
          </h1>
  );
}
export {TodoCounter}