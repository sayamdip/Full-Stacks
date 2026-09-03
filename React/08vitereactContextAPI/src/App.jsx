import { useState } from 'react'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  

  return (
    <UserContextProvider>
      <h1 className='text-white text-center'>React With Chai</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
