import { useState, useEffect,useContext } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {   
  
    // Rules of hooks
    // 1. Only use hooks in functional components/custom hooks 
    // 2. Only use hooks at the top-level of a functional component
    // 3. You cannot use hooks in a conditional
 


  return (
    <main>
      <Header />
      <Tasks />
    </main>
  )
}

export default App
