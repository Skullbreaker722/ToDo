import React from 'react';
import { TodoItem } from '../MyComponents/TodoItem';

export const Todos = (props) => {
  return (
    <div className='container'>
      <h3 className='my-3'>Todos List</h3>
      <TodoItem todo = {props.todos[0]}/>
    </div>
  );
};
