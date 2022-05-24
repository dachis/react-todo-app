import React, { useMemo, useContext } from "react";
import { useTable, useSortBy } from "react-table";

import { TaskContext } from "./task_new";

function TaskList() {
  const { tasks } = useContext(TaskContext)
  console.log(tasks.length)

  const columns = useMemo(
      () => [
          { Header: "deadline", accessor: "deadline" },
          { Header: "task_state", accessor: "task_state" },
          { Header: "content", accessor: "content" }
      ],
      []
  );

  const data = useMemo(
      () => tasks,
      []
  );

  const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow
  } = useTable({
      columns,
      data
  });

  const renderTasks = () => {
    return tasks.map((currentTask, index) => {
      return (
        <tr key={index}>
          <td>{currentTask.deadline}</td>
          <td>{currentTask.task_state}</td>
          <td>{currentTask.content}</td>
        </tr>
      )
    })
  }

  return (
    <table>
      <thead>
        <tr>
          <th>deadline</th>
          <th>task_state</th>
          <th>content</th>
        </tr>
      </thead>

      <tbody>
        {renderTasks()}
      </tbody>
    </table>
  );
}

export default TaskList