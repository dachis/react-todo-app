import React, { createContext, useState } from "react";

import TaskPost from './task_post';
import TaskList from './task_list';

export const TaskContext = createContext(null);

function Home() {
  const [ tasks, setTasks ] = useState([]);

  return (
      <TaskContext.Provider value={{ tasks, setTasks }}>
          <h1>Task Management Tool</h1>
          <TaskPost />
          <TaskList />
      </TaskContext.Provider>
  )
}

export default Home