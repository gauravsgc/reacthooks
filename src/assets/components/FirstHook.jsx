import React,{useState} from 'react'

export const FirstHook = () => {
   const [count,setCount]=useState(0); 
   const Increment=()=>{
       setCount(count+1)
   };
  return (
    <div>{count}
    {/* <button onClick={()=>setCount(count+1)}>click</button></div> */}
    <button onClick={Increment}>increment</button>
    </div>
  )
}
