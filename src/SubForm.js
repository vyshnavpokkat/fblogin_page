import React from 'react'
import './logopage2.css'


export default function subForm() {
  return (
    <div id="regCont">
        <div >
        Name:<br/>
        <input type="text"  className='in' /><br/>
        </div><div className="R2">
        Email:<br/>
        <input type="Email"  className="in" /><br/>
        </div>
        
       <div >
        Phone Number:<br/>
        <input type="text"  className="in" /><br/>
        </div>
        <div >
        Password:<br/>
        <input type="password"  className="in" /><br/>
        </div>
        <button class="sigB3">Sumbit</button><br/>
    </div>
  )
}
