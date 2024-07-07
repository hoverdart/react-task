import Task from "./Task"
import React from 'react'

const Tasks = (props) => {
  return (
    <>
       {props.tasks.map((task) => (<Task key={task.id} task={task} onDelete={props.onDelete} onSet={props.onSet}/>))}
    </>
  )
}

export default Tasks
