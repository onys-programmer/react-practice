import React from 'react';
import Item from './Item.jsx';

export default function List({ tasks, onClickDelete }) {
  return (
    <ol>
      {tasks.map((task) => (
        <Item 
          key={task.id} 
          task={task} 
          onClickDelete={onClickDelete} 
        />
      ))}
    </ol>
  );
}