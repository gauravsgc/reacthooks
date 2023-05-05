import React,{useReducer} from 'react'
const reducer=(state,action)=>{
    switch(action.type){
       case "Increment":
        return {count:state.count+1,color:'blue'};
        default:
            return state;
    }
}

export const SecondHook = () => {

    const [state, dispatch] = useReducer(reducer,{count:0, color:'red'})
  return (
    <div>
        {state.count}
        {state.color}
        <button onClick={()=>dispatch({type:'Increment'})}>click</button>
    </div>
  )
}
