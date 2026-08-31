import { useState } from 'react'

function App() {
  const [color, setColor] = useState("Black")
  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-stone-600 px-3 py-2 rounded-xl'>
            <button onClick = {() => setColor("Red")}className="outline-none px-4 py-1 rounded-full text-white" style = {{backgroundColor: "Red"}}>Red</button>

            <button onClick = {() => setColor("Grey")} className="outline-none px-4 py-1 rounded-full text-white" style = {{backgroundColor: "Grey"}}>Grey</button>

            <button onClick = {() => setColor("White")} className="outline-none px-4 py-1 rounded-full text-black" style = {{backgroundColor: "White"}}>White</button>

            <button onClick = {() => setColor("Green")} className="outline-none px-4 py-1 rounded-full text-white" style = {{backgroundColor: "Green"}}>Green</button>

            <button onClick = {() => setColor("Yellow")} className="outline-none px-4 py-1 rounded-full text-black" style = {{backgroundColor: "Yellow"}}>Yellow</button>

            <button onClick = {() => setColor("Pink")} className="outline-none px-4 py-1 rounded-full text-black" style = {{backgroundColor: "Pink"}}>Pink</button>

            <button onClick = {() => setColor("Blue")} className="outline-none px-4 py-1 rounded-full text-white" style = {{backgroundColor: "Blue"}}>Blue</button>

            <button onClick = {() => setColor("Lavender")} className="outline-none px-4 py-1 rounded-full text-black" style = {{backgroundColor: "Lavender"}}>Lavendar</button>

            <button onClick = {() => setColor("Purple")} className="outline-none px-4 py-1 rounded-full text-white" style = {{backgroundColor: "Purple"}}>Purple</button>

            <button onClick = {() => setColor("Indigo")} className="outline-none px-4 py-1 rounded-full text-white" style = {{backgroundColor: "Indigo"}}>Indigo</button>

          </div>
        </div>

      </div>
    </>
  )
}

export default App
