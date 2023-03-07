/*ToDoList.tsx*/
import React, { useState } from 'react';
import { useAddTodo }from '../Hooks/useAddTodo';

export const ToDoList : React.FC = () => {
  const {todos} = useAddTodo()

  return(
    <>
      <div>todoリスト</div>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </>
  )
}