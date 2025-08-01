import React, {useState, useEffect } from 'react'

const Counter = () => {
  const [sec,setSec]=useState(0);

  useEffect(()=>{
const interval=setInterval(()=>{
  setSec(prev=>prev+1);
},1000);
return()=>clearInterval(interval);
  },[])
  return (
    <div>
              <h2 className='text-5xl text-pink-500 '>{sec}</h2>
    </div>
  )
}

export default Counter
