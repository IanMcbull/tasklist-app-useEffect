import { useState } from "react"
import { useTodos } from "../hooks/useTodos"
const Task = ({ todo }) => {
  const [isLiked, setIsLiked] = useState(false)
  const {todos,setTodos} = useTodos()
  const deleteTask = (id) =>{
    // When we click the trash icon, we need to delete a task.
    // Todos is an Array of objects [{}]

    //Step 1
    // Get the ID
    
    // Step 2
    // We need to use the ID to filter our todos
    // We want to return all the elements that DO NOT match the ID
    // [{}] or {}

    const filteredTodos = todos.filter((tdo)=>tdo.id !== id)
    setTodos(filteredTodos)
    
  }
  return (
    <div className="task">
      <p>{todo.title}</p>
      <div className="icons">
        <button type="button" onClick={()=>deleteTask(todo.id)}><span className="material-symbols-outlined">
          delete
        </span></button>
        <button type="button" onClick={()=>setIsLiked(!isLiked)}>
        {isLiked ? (<span className="material-symbols-outlined">
          heart_broken
          </span>):
          (<span className="material-symbols-outlined">
            favorite
          </span>)}
        </button>
      </div>
    </div>
  )
}

export default Task