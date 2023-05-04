
import Button from "./Button"
import Task from "./Task"
import { useTodos } from "../hooks/useTodos"
const Tasks = () => {
  const {isLoading,error,setTodos,todos} = useTodos()
  if(isLoading){
   return <p>Loading..</p>
  }
  if(error){
  return  <p>{error.message}</p>
  }
  return (
    <section className="tasks-container">
      <div className="button-group">
        <Button classname="btn-all">All Tasks</Button>
        <Button classname="btn-fav">Favorite Tasks</Button>
      </div>
      <article className="tasks">
        <h2>All Tasks</h2>
        {todos?.map(todo=> <Task key={todo.id} todo={todo
        }/>
        )}
      </article>
    </section>
  )
}

export default Tasks