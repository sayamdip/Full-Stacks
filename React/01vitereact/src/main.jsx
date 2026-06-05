import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'


function MyApp(){
    return(
        <div>
            <h1>Custom App!</h1>
        </div>
    )
}
const ReactElement={
    type:"a",
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children:"Click Me To Visit Google"
}




const anotherUser=" Chai Aur React"
const anotherElement=(
    <a href="https://google.com" target="_blank">Visit Google</a>
)


const reactElement=React.createElement(
    "a",
    {href:"https://google.com",target:"_blank"},
    "Click Me To Visit Google",
    anotherUser
)


createRoot(document.getElementById('root')).render(
    reactElement
  
)
