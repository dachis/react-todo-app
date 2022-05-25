import React, { useContext } from "react";

import { TaskContext } from "./home";

function TaskList() {
  const { tasks, setTasks } = useContext(TaskContext);

  const handleClick = (e, id) => {
    let task_history = tasks.filter((task) => {
      return (task.id != id)
    })
    setTasks([...task_history])
  }

  const renderTasks = () => {
    return tasks.map((currentTask) => {
      console.log(currentTask)
      return (
        <tr key={currentTask.id}>
          <td>{currentTask.deadline}</td>
          <td>{currentTask.task_state}</td>
          <td>{currentTask.content}</td>
          <td><button onClick={e => handleClick(e, currentTask.id)}>delete</button></td>
        </tr>
      )
    })
  }

  return (
    <table border="1">
      <thead>
        <tr>
          <th>deadline</th>
          <th>task_state</th>
          <th>content</th>
          <th>⚙</th>
        </tr>
      </thead>

      <tbody>
        {renderTasks()}
      </tbody>
    </table>
  );
}

export default TaskList