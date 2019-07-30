import React from 'react'
import './NavMenu.css';


export default function NavMenu() {

  function myFunction() { 
    console.log("test")
  }

  return (
    <div>
    <div className="topnav">
      <a href="#home" className="active">Logo</a>
      <div id="myLinks">
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
      <a href="javascript:void(0);" className="icon" onClick={myFunction()}>
        <i className="fa fa-bars"></i>
      </a>
    </div>
    </div>
  )
}
