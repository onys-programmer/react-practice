import React, { useState } from 'react';
import Page from './Page.jsx';

export default function App() {
  const [state, setState] = useState({
    newId: 100,
    taskTitle: '',
    tasks: [
      { id: 1, title: '아무것도 하지 않기1' },
      { id: 2, title: '아무것도 하지 않기' },
    ]
  });

  const { newId, taskTitle, tasks } = state;
  
  function handleClickAddTask() {
    setState({
      newId: newId + 1,
      taskTitle: '',
      tasks: [...tasks, {id: newId, title: taskTitle}]
    });
  }

  function handleChangeTitle(event) {
    setState({
      ...state,
      taskTitle: event.target.value,
    });
  }

  function handleClickDeleteTask(id) {
    setState({
      ...state,
      tasks: tasks.filter(task => task.id !== id),
    });
  }

  return (
    <div>
      <Page 
        taskTitle={taskTitle}
        tasks={tasks}
        onClick={handleClickAddTask}
        onChangeTitle={handleChangeTitle}
        onClickDeleteTask={handleClickDeleteTask}
      />
    </div>
  );
}
