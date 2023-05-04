// Import createContext to create a context
import { createContext, useState,useEffect } from "react"

// Define a context and give an initial value
export const TodosContext = createContext({});


// Create a Provider
// Provides the context and makes it available to its children
export const TodosContextProvider = ({ children }) => {
    const [todos, setTodos] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    useEffect(() => {
        setIsLoading(true)
        const fetchTodos = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/todos')
            const data = await res.json()

            if (!res.ok) {
                throw new Error('An error occured')
            }
            return data;
        }
        fetchTodos().then(res => setTodos(res.slice(0, 6)))
            .catch(err => {
                setError(err)
            }
            )
            .finally(() => setIsLoading(false))
    }, [])
    return <TodosContext.Provider value={{todos, setTodos, isLoading, error }}>
        {children}
    </TodosContext.Provider>
}