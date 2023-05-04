import { TodosContext} from "../context/TodosContext";
import {useContext} from "react"
export const useTodos = () => useContext(TodosContext)
