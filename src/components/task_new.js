import React, { createContext, useState, useContext } from "react";
import { useForm } from "react-hook-form";

import TaskList from './task_list';

export const TaskContext = createContext(null);

function TaskNew() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [tasks, setTasks] = useState([], null);
    const value = {
        tasks,
        setTasks,
    };
    
    let task_history = tasks ? tasks : []

    const onSubmit = data => {
        const { deadline, task_state, content } = data
        const task = {
            deadline: deadline,
            task_state: task_state,
            content: content
        }
        task_history.push(task)
        setTasks(task_history)
    }

    return (
        <TaskContext.Provider value={value}>
            <h1>Task Management Tool</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                deadline: 
                <input type="date" {...register("deadline")} />

                State:
                <select {...register("task_state", { required: true })}>
                    <option value="not-started">not started</option>
                    <option value="in-progress">in progress</option>
                    <option value="done">done</option>
                </select>
                {errors.task_state && <span>This field is required</span>}
                
                {/* include validation with required or other standard HTML validation rules */}
                Content: 
                <input {...register("content")} />
                {/* errors will return when field validation fails  */}
                {/* {errors.exampleRequired && <span>This field is required</span>} */}
                
                <input type="submit" />
            </form>
            <TaskList />
        </TaskContext.Provider>
    )
}

export default TaskNew