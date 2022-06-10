import React, { useState } from 'react'
import './home.css'
import TaskForm from './subComponanes/Taskform/TaskForm';

const Home = (props) => {;
    const [tasks, setTasks] = useState([]);

    const addtask = function (task) {
        const newTasks = [...tasks, task]
        setTasks(newTasks)
    }

    return (
        <div >
           <TaskForm />
        </div>
    )
}

export default Home