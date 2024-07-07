import React from 'react'
import { useState } from 'react'
const AddTask = (props) => {

    const [text, setText] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [remind, setReminder] = useState(false)
    const onSubmit = (e) => {
        let flag = 1
        e.preventDefault()
        if(!text){
            alert('Please Specify a Task Name!')
            flag = 0
        }
        if(!date){
            alert('Please Specify a Date!')
            flag = 0
        }
        if(!time){
            alert('Please Specify a Timeframe!')
            flag = 0
        }
        if(flag===1){
            props.onAdd({text,date,time,remind})
        }
        setText('')
        setDate('')
        setTime('')
        setReminder(false)
    }
  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className="form-group form-control">
          <label>Add Task</label>
          <input className="form-control" type='text' placeholder="Go Shopping" value={text} onChange={(e) => setText(e.target.value)}></input>
      </div>
      <div className="form-group form-control">
          <label>Add Date</label>
          <input className="form-control" type='date' placeholder="MM/DD/YYYY" value={date} onChange={(e) => setDate(e.target.value)}></input>
      </div>
      <div className="form-group form-control">
          <label>Add Time</label>
          <input className="form-control" type='time' placeholder="12:30 PM" value={time} onChange={(e) => setTime(e.target.value)} ></input>
          
      </div>
      <div className="form-group form-control" style={{display:'flex',justifyContent:'space-between'}}>
          <label className="form-label">Set Reminder?</label>
          <input type='checkbox' checked={remind} value={remind} onChange={(e) => setReminder(e.currentTarget.checked)}></input>
      </div>
      <small className="form-text text-muted">This is only in the UI, and isn't in a Database.</small>
      <input type="submit" value='Save' className='btn btn-block btn-dark border border-primary'></input>
    </form>
  )
}

export default AddTask
