import React,{useEffect, useState} from 'react'

export const ThiredHook = () => {
  const [timer,setTimer]=useState(new Date().toLocaleTimeString());
  const [data,setData]=useState(0);
  
  const myInterval=()=>{
    setTimer(new Date().toLocaleTimeString());
    console.log("good night");
  }
  useEffect(() => {
      console.log("goodmorning");
   
      const interval=setInterval(myInterval,1000);

      return () => {
        
      }
    }, [])
  return (
    <div>hello{timer}{data}
    <button onClick={()=>setData(data+1)}>click</button></div>
  )
}
