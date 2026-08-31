import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setnumAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [Password, setPassword] = useState("")

  // useRef Hook- It Help To Refer A Thing (Dom Element) 
  const passwordRef = useRef(null)

  const copyPasswordToClipBoard = useCallback(() => {

    passwordRef.current?.select() // It Shows The Copied Text (Range Selected)

    window.navigator.clipboard.writeText(Password)

  }, [Password])

  // Password Generator Function With useCallback- It Memorises Function In The Cache (Optimisation)
  const passwordGenerator = useCallback(() => {
     let pass = ""
     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllowed){
      str += "1234567890"
    }

    if (charAllowed){
      str += "!@#$%^&*-_+={}[]~`><,.;:|"

    }

    // Loop To Create Random Password
    for (let i=1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)


  }, [length, numAllowed, charAllowed, setPassword]) // setPassword- For Memory Optimisation

  // useEffect Hook- It Is Called When The State Changes Or On Initial Render
  // Dependency Array- It Is Called When The State Changes Or On Initial Render

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator]) //Dependency Array

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-7 my-10 text-center text-white bg-gray-800">

        <h1 className="text-center text-red-500 text-xl font-bold my-3">Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          
           {/* It Is Used To Make Password Box */}
          <input type = "text" 
          value = {Password} 
          className = "outline-none w-full py-0 px-3 text-orange-800" 
          placeholder = 'Password' 
          readOnly
          ref = {passwordRef}
          />
          <button onClick={copyPasswordToClipBoard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-orange-500">Copy</button>
        </div>

          {/* It Is Used To Include Or Exclude Numbers And Characters In Password */}
          <div className="flex text-sm gap-x-5">
            <div className="flex items-center gap-x-1">
              <input type="range" 
              min={8} 
              max={100} 
              value={length} 
              className="cursor-pointer" 
              onChange={(e)=>{setLength(e.target.value)}} 
              />

              <label className="text-orange-300">Length: {length}</label>

            </div>

            {/* It Is Used To Include Numbers In Password */}
            <div className="flex item-center text-sm gap-x-0.5">
                <input type="checkbox" 
                defaultChecked = {numAllowed}
                id="numberInput"
                onChange={() => {setnumAllowed((prev) => !prev)}}
                />
                <label className="text-orange-300">Numbers</label>
            </div>
              

            {/* It Is Used To Include Special Characters In Password */}
            <div className="flex items-center gap-x-0.5">
                <input type="checkbox" 
                defaultChecked = {charAllowed}
                id="charInput"
                onChange={() => {setcharAllowed((prev) => !prev)}}
                />
                <label className="text-orange-300">Characters</label>
            
            </div>
              
          </div>

      </div>

    </>
  )
}

export default App
