import React,{useState} from 'react'

export const FirstHook1 = () => {
    const [state,setState]=useState();
  return (
    <div>
        <input type="text"  onChange={(e) => setState(e.target.value)} />
        {state}
    </div>
  )
}
