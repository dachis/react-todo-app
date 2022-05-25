import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";

import { TaskContext } from "./home";

function TaskPost() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { tasks, setTasks } = useContext(TaskContext);
    const [ id, setId ] = useState(0);
    
    let task_history = tasks ? tasks : []

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

    return (
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
    )
}

export default TaskPost