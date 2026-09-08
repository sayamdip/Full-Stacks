import { useState } from 'react'
import config from './config/config';
function App() {
  console.log(config.appwriteUrl);


  return (
    <>
      <h1 className='text-3xl font-bold underline bg-red-600 text-center'>A Blog With App Write</h1>
    </>
  )

}

export default App
