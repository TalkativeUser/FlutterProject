import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'



export default function Navbar() {

  return <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top p-4 ">
  <div className="container">
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        
          <li className="nav-item  m-2 ">
          <NavLink className=" active-link nav-NavLink text-decoration-none  " aria-current="page" to="/Home">HOME</NavLink>
        </li>
        <li className="nav-item m-2 ">
          <NavLink className=" active-link nav-NavLink text-decoration-none  " aria-current="page" to="/MyWorks">MY WORKS</NavLink>
        </li>
        <li className="nav-item  m-2 ">
          <NavLink className=" active-link nav-NavLink text-decoration-none  " to="/AboutMe">ABOUT ME</NavLink>
        </li>
     
        
        
        
      </ul>
    
      
    
    </div>
  </div>
</nav>
  
  
  
  
  </>
}
