
import React,{useState} from 'react'
  
const Timer = () => {
  const[timer,setTimer]=useState(0);
  const increment=()=>{
    setTimer(timer+1);
  }
  const decremnt=()=>{
    setTimer(timer-1);
  }
  return (
    <div>
      
      <button onClick={increment}>Incr</button>
     <p>{timer}</p>
      <button onClick={decremnt}>Decr</button>
    </div>
  )
}

export default Timer
