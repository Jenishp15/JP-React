import { useState } from 'react'  

import './App.css'

function App() {

  let [counter,setcounter] = useState(11)

  const Addvalue=()=>{
    setcounter(counter + 1)
  }

  const Removevalue=()=>{
    setcounter(counter - 1)
  }

  return (
    <>
     <h1>Chai aur React (counter)</h1>
     <h2>counter : {counter}</h2>

     <button
      onClick={Addvalue}
     >Add value {counter}</button>

    <button
      onClick={Removevalue} 
     >Remove value {counter}</button>

     <footer>The final value is : {counter}  </footer>

  
    </>
  )
}

export default App
