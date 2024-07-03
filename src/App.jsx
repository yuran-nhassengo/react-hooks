import { useEffect, useState } from "react"
import { EffectHook } from "./components/EffectHook"

function App() {
  const [name,setName] = useState("")

  function handleInputChange(event){
    setName(event.target.value)
  }

  return (
    <div>
      <EffectHook/>
      <form>
        <p>Nome: {name}</p>
        <input onInput={handleInputChange}></input>
      </form>
      
    </div>
  )
}

export default App
