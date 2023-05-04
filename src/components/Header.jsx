import { useState } from "react"
import Button from "./Button"

import { useTodos } from "../hooks/useTodos";
const Header = () => {
  const {setTodos} = useTodos()
 
  // Track the input - Done
  // Prevent default behaviour - Done
  // clear the input after submission  Done
 
  // We need to add the shared state to a parent component
  // We need to use the setTodos setter function to add a new todo to the todos state
  
  // We need to get the value of the newTask and add it to the task list when the user submits the form
 

  const [newTask,setNewTask] = useState('');
   
   const handleSubmit = (e) =>{
    e.preventDefault()
    // We need to give the setTodos an object that has an id and a title
    // setTodos(newTask)
    const newTaskItem = {
       id:crypto.randomUUID(),
       title:newTask
    }
    
    setTodos((prev)=>[newTaskItem,...prev])
    setNewTask('') 
  }
  return (
    <header>
        <form className="form" onSubmit={handleSubmit} >
           <input type="text" value={newTask} onChange={(e)=>setNewTask(e.target.value)}  placeholder="Add a new task" className="form-control"/>
           <Button classname="btn-submit">Add Task</Button>
        </form>
    </header>
  )
}

export default Header