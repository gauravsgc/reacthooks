//LayoutEffectTutorial:--
import React,{useLayoutEffect,useEffect} from 'react'

export const Fifth = () => {
    //early of renderning:---
useLayoutEffect(() => {
  //ui design..u can use..after this what u want..
    console.log("useeffectlayout");

  return () => {
   
  };
}, [])
//to show..
useEffect(() => {
  
console.log("useeffect");
  return () => {
    
  }
}, [])

  return (
    <div>good morning</div>
  )
}
