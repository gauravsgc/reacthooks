import React,{useRef} from 'react'

export const FourthHook = () => {
  const inputref=useRef();
  const clickHandler=()=>{
      inputref.current.focus();
      inputref.current.value="";
      console.log(inputref.current.value);
  }
    return (
    <div>
        <input type="text" placeholder="example"
        ref={inputref} />
        <button onClick={clickHandler}>clickheretofocus</button>
    </div>
  )
}
