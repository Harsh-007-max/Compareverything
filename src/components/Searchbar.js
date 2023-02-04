import React from 'react'
import {Link} from "react-router-dom";
import "./CSS/Searchbar.css"
import search from "./logo/search.png"
import dark from "./logo/Dark-Mode.png"
import light from "./logo/Light-Mode.png"
import loginico from "./logo/login-logo.png"
import logo from "./logo/Compareverything-logo.png"
export default function Searchbar(props) {
  return (
    <div>
        <nav>
            <div className={`d-flex navbar-${props.mode} ${props.mode==='light'?'gradient-background-light':'gradient-background-dark'}`}>
                {/* Search bar code is given below */}
                <Link to="/" className='navbar-brand p-3 custom-bold'>
                    <img className='logo-margin' src={logo} alt=""/> 
                    {props.title}
                </Link>
                <form className="d-flex mx-auto pt-2 pb-2" role="search">
                    {/* form-control */}
                    <input className='d-flex sb me-2' type="search" placeholder='Search product' aria-label='Search'/>
                    <button className='btn seb ' type='submit'><img src={search} alt="" /></button>
                </form>
                {/* Login / Sign Up page code below */}
                    <div className='d-flex lg'>
                        <Link to='/login' className="nav-link">
                            <img src={loginico} alt="Login" />
                            <label className=''>login</label>
                        </Link>
                    </div>
                {/* Light to dark mode switch code below */}
                <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} p-3`}>
                    <input className="form-check-input " onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> <img src={props.mode==='light'? light:dark} alt="" /></label>
                </div>
            </div>
        </nav>
    </div>
  )
}
