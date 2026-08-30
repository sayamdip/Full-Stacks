import Card from "./Components/Card"
function App() {
  let myObj={
    username: "Sayamdip",
    age: 23
  }
  let newArr = [1,2,3]
  return (
    <>

      <div className="min-h-screen bg-gray-950 text-white p-6 flex flex-col items-center gap-6">
        <h1 className="text-base sm:text-2xl md:text-3xl font-bold p-3 rounded-xl bg-slate-500 text-center w-full break-words">
          My Name Is Sayamdip Dey Chaklader</h1>
          <Card username="Sayamdip Dey Chaklader" btnText="Click Me"/>
          <Card username="Rick Dey Chaklader" />
      </div>
      
    </>
  )
}

export default App;
