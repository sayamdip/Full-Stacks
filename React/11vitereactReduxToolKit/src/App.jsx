import { useState } from 'react'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'


function App() {

  return (
    <>
      <h1 className="text-center text-3xl text-white bg-black p-3 mb-10 shadow-2xl">Leard About Redux Toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
