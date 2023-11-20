import { useState } from "react";

function App() {
 let [counter, setCounter] = useState(15);

//let counter=15;
const addValue = ()=>{
  if(counter<=19)
  setCounter(++counter);
  
}

const removevalue = ()=>{
  if(counter>0)
  setCounter(--counter);
  
}
  return (
    <>
    <h1>Counter of value:{counter}</h1>
    <button
    onClick={addValue}
    >Add Value: {counter}</button>

    <br />

    <button 
    onClick={removevalue}
    >remove Value: {counter}</button>
    </>
   
  )
}

export default App
