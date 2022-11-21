import React from 'react'
import './logopage.css'
import {Link } from "react-router-dom";

export default function () {
  return (
    <div id="log_container">
    <input type="email" placeholder='Email' className="inZone" /><br/>
    <input type="password" placeholder='Password' className="inZone" /><br/>
    <button className="sigB">Login</button><br/>
    <hr></hr>
    <a id="Fpass">forgot password</a> <br/>
    <Link to="/reg"><button className='sigB2'>Create a New Accound</button></Link>
    </div>
  )
}

        
        
        
        
        