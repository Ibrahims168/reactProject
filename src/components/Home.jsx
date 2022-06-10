import React, { useState } from 'react'
import './home.css'
import TaskForm from './subComponanes/Taskform/TaskForm';
import Tasks from './subComponanes/Taskform/TaskForm';

const Home = (props) => {;
    const [tasks, setTasks] = useState([]);

    const addTask = function (task) {
        const newTasks = [...tasks, task]
        setTasks(newTasks)
    }

    return (
        <div>
           <TaskForm addTask ={addTask} />
           <Tasks tasks = {tasks}/>
        </div>
    )
}

export default Home