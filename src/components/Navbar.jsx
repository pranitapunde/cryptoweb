
// import React from 'react'

import { Link } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react'

const Navbar = () => {

  const [display, setDisplay] = useState(false);
  const menuRef = useRef();

  useEffect(() => {

    let menuHandler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setDisplay(false)
      }
    }
    document.addEventListener("mousedown", menuHandler);

    return () => {
      document.removeEventListener("mousedown", menuHandler);
    }

  }, [])

  return (
    
    <nav>
      <ul className={display ? 'sidebar' : 'display-none'} ref={menuRef}>
        <li id='croshide' onClick={() => (setDisplay(!display))} ><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg></li>
        <li className='m-'> <Link to="/"> <a href='#'>Home</a> </Link></li>
        <li><Link to="allcoins"> <a href="#">Allcoins</a> </Link></li>
        <li> <Link><a href='#'>Contact</a></Link></li>
        <li><Link><a href='#'>Coding</a></Link></li>
        <li><Link to="loginpage"> <a href='#'>login </a></Link></li>
      </ul>

      <ul>
        <li> <Link to="/"><a href='#' className='cry'>Crypto Traders</a> </Link></li>
        <li className='hidemob'> <Link to="/"> <a href='#'>Home</a></Link></li>
        <li className='hidemob'>  <a href='#'><Link to="/allcoins"> Allcoins  </Link> </a></li>
        <li className='hidemob'> <Link to="/Aboutpage" ><a href='#'> About</a> </Link></li>
        <li className='hidemob'><a href='#'>Contact</a></li>
        <li className='hidemob'> <Link to="/loginpage"><a href='#'>login</a> </Link></li>
        <li id='menu-butn' onClick={() => (setDisplay(!display))}> <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28"  className='threeline' ><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg></li> 

      </ul>

    </nav>

  )
}

export default Navbar

