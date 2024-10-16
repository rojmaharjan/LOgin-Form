import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Nav() { 
  let usenavigate = useNavigate()
  useEffect(()=>{
    let getid= sessionStorage.getItem('id')
    if(getid=="" || getid==null){
      usenavigate('/login')

    }
  },[]) 
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/userdetail" className="nav-link" >User</Link>
        </li>
        <li className="nav-item">
          <Link to="/Login" className="nav-link" >Log out</Link>
        </li>
          
      </ul>
    </div>
  </div>
</nav>
      
    </>
  )
}

export default Nav
