import React, { useContext } from "react";
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { TaskContext } from "./home";

const columns = [
  { field: 'deadline', headerName: 'deadline', width: 70 },
  { field: 'task_state', headerName: 'state', width: 130 },
  { field: 'content', headerName: 'Last name', width: 130 },
  { field: 'delete', headerName: '⚙', width: 90, }
];

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
        <TableRow
          key={currentTask.id}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {currentTask.deadline}
          </TableCell>
          <TableCell>{currentTask.task_state}</TableCell>
          <TableCell>{currentTask.content}</TableCell>
          <TableCell align="center"><Button variant="contained" onClick={e => handleClick(e, currentTask.id)}>delete</Button></TableCell>
        </TableRow>
      )
    })
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>deadline</TableCell>
            <TableCell>task_state</TableCell>
            <TableCell>content</TableCell>
            <TableCell align="center" style={{width:"100px"}}>⚙</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {renderTasks()}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TaskList