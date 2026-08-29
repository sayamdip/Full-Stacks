import React from 'react'
import App from './App.jsx'
import {createRoot} from "react-dom/client"


function MyApp(){
  return(
    <div>
      <h1>Custom App!</h1>
    </div>
  )
}

const reactElement = React.createElement(
  'a',
  {href:"https://google.com", target: "_blank"},
  "Click Me To Visit Google"

)

createRoot(document.getElementById('root')).render(
  <>

    <MyApp />
    <App />
    {reactElement}
    
  </>
)
