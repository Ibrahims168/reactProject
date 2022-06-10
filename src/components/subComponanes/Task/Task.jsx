import React from 'react'
import Task from '../tasks/tasks'

const Task = ({ tasks }) => {
  return (
    <div>
{tasks.map((task))}
    </div>
  )
}

export default Task