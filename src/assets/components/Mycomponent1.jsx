import React from 'react'

export const Mycomponent1 = (data) => {
    console.log(data.info);
    console.log(data);
    
  return (
    <div>good morning
       
        {data.info.filter((e)=>e.itemprice>2000).map((e,index)=><li key={index}>{e.itemno}</li>)}
        <img src={data.path} alt="" />
    </div>
  )
}
