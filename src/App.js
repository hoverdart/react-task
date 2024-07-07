import React from "react";
import { useState } from 'react'
import Header from "./components/Header" //This is in our components folder, and this is just a header component. We shall use it here.
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import 'bootstrap/dist/css/bootstrap.css'
//917e2a0dd6814dfabab2c4c614934bea
//import Modal from "./components/Modal"

function App() {  //This might look like html, but its JSX (JavaScript Syntax Extension). This means you can write javascript directly in here.
  const [showAddTask, setShowAddTask] = useState(false)
  const [showTasks, setShowTasks] = useState(true)
  const [tasks, setTasks] = useState([
    {
        id: '1',
        text:'Father\'s Day Party',
        date:'6-19-2022',
        time:'3:00 PM',
        remind: false
    },
    {
        id: '2',
        text:'Orthodontist Appointment at Dante Gonzales',
        date:'6-22-2022',
        time:'12:00 PM',
        remind: true
    },
    {
        id: '3',
        text:'Back 2 School',
        date:'8-15-2022',
        time:'8:30 AM',
        remind: true
    },
])


const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

const setReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, remind: !task.remind} : task))
}

const addTask = (task) => {
  console.log(task)
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
  console.log(tasks)
}  

//const onClick = () => {
  // console.log('gisies')
//}

  return ( //This "title" allows us to retrieve said header in the Header.js function (component). To do so, we must specify "props"
    <div className="container bg-light border border-primary"> 
      <Header title='Coolness' btnTitle={showAddTask ? 'Hide Form' : 'Add Task'} otherTitle={showTasks ? 'Hide Tasks' : 'Show Tasks'} onAdd={() => setShowAddTask(!showAddTask)} onShow={() => setShowTasks(!showTasks)}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {showTasks ? tasks.length > 0 ? <Tasks tasks={tasks} setTasks={setTasks} onDelete={deleteTask} onSet={setReminder} /> : 'No Tasks to Show. Add a Task?' : 'Click on the "Show Tasks" button to show your tasks!'}
      <br>
      </br>
    </div>
  ); // everything must stay inside the div, or you will get an error.
}

//If you wanna use classes, use the code below. It has been commented out. Basically, you're gonna have to import "import React from "react" "
//class App extends React.Component {
  //render() {
    //return <h1>Hello from this classy class.</h1>

  //}
//}


export default App;
