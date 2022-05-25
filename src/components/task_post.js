import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { TaskContext } from "./home";

function TaskPost() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { tasks, setTasks } = useContext(TaskContext);
    const [ id, setId ] = useState(0);
    
    let task_history = tasks ? [...tasks] : []

    const onSubmit = data => {
        const { deadline, task_state, content } = data
        const task = {
            id: id,
            deadline: deadline,
            task_state: task_state,
            content: content
        }
        setId(Number(id) + 1)
        task_history.push(task)
        setTasks([...task_history])  // スプレッド構文にしないとsetTasksで値が更新されない。
    }

    const handleChange = (value) => {
        console.log(value)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                    <Grid item xs={2}>
                        <TextField fullWidth type="date" {...register("deadline")} />
                    </Grid>

                    <Grid item xs={2}>
                        <FormControl fullWidth>
                            <InputLabel>state</InputLabel>
                            <Select 
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                defaultValue={""}
                                label="state"
                                onChange={handleChange}
                                {...register("task_state", { required: true })}
                            >
                                <MenuItem value={"not-started"}>not started</MenuItem>
                                <MenuItem value={"in-progress"}>in progress</MenuItem>
                                <MenuItem value={"done"}>done</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={2}>
                        <TextField fullWidth {...register("content")} />
                    </Grid>

                    <Grid item xs={1} alignItems="center">
                        <Button type="submit" variant="contained">add</Button>
                    </Grid>

                </Grid>
                <Grid container spacing={2} alignItems="baseline" justifyContent="center">
                    <Grid item xs={2}>
                        <div style={{height:"50px"}}>　</div>
                    </Grid>

                    <Grid item xs={2}>
                            {errors.task_state && <span>This field is required</span>}
                    </Grid>

                    <Grid item xs={2}>
                    </Grid>

                    <Grid item xs={1} alignItems="center">
                    </Grid>

                </Grid>
            </Box>
        </form>
    )
}

export default TaskPost