import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import {FaTimes,FaBars} from "react-icons/fa";
import  './style/mymenu.css'
export const Mymenu = () => {
  const [toggle,setToggle]=useState(false);
    const toggleEvent=()=>{
setToggle(!toggle);
console.log(toggle);
  }
    return (
    <div className="nav">
<div className="logo">
Learning Point
</div>
<div  className= {toggle?"menu toggle":"menu"}  >
    
    <ul>
        <li>home</li>
        <li>aboutus</li>
        <li>contact us</li>
    </ul>
    
</div>
<div className="icon" onClick={toggleEvent}>
    {/* <GiHamburgerMenu style={{'fontSize':'3em'}}/> */}
    {toggle?<FaTimes></FaTimes>:<FaBars></FaBars
    >}
    </div> 
    </div>
  )
}
