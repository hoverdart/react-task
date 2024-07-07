import React from 'react'
import { FaTimes } from 'react-icons/fa'


const Task = (props) => {
  return (
    <div className="container" style={props.task.remind ? withReminder : taskStyle} onDoubleClick={() => props.onSet(props.task.id)}>
      <h5>{props.task.text} <FaTimes style={{color: 'red', float:'right'}} onClick={() => props.onDelete(props.task.id)} /></h5>
      <p>{props.task.date} | {props.task.time}</p>
    </div>
  )
}

const taskStyle = {
    background: '#f4f4f4',
    margin: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
}
const withReminder = {
  ...taskStyle,
  borderLeft: "5px solid green"
}
export default Task
