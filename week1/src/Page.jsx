import React from 'react';
import Input from './Input.jsx';
import List from './List.jsx';

export default function Page({ taskTitle, onChangeTitle, tasks, onClick, onClickDeleteTask }) {
  return (
    <div>
      <h1>To-do</h1>
      <Input 
        value={taskTitle} 
        onChange={onChangeTitle}
        onClick={onClick}
      />
      <List 
        tasks={tasks}
        onClickDelete={onClickDeleteTask}  
      />
    </div>
  );
}
