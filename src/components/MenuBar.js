import React from 'react'
import "./CSS/MenuBar.css";
import {Link} from "react-router-dom";
import logoHomeWhite from "./logo/home-icon-white.png";
import logoHomeDark from "./logo/Home-icon-black.png";

export default function MenuBar(props) {
  return (
    <>
        <nav className="nav ">
            <div className={`d-flex size ${props.mode==='light'?'background-light':'background-dark'} ${props.mode ==='light'?'textb':'textw'}`}>
                <Link to={`/`} className={`d-flex Linkelem mx-auto  pt-1 pb-1`}>
                <img className='logo-Home' src={props.mode==='light'?logoHomeDark:logoHomeWhite} alt=""/>
                </Link>
                <Link to={`/Mobile`} className={`d-flex Linkelem mx-auto pt-2 pb-2 ${props.mode ==='light'?'textb':'textw'}`}>
                    Mobile
                </Link>
                <Link to={`/Electronics`} className={`d-flex Linkelem mx-auto pt-2 pb-2 ${props.mode ==='light'?'textb':'textw'}`}>
                    Electronics
                </Link>
                <Link to={`/Fashion`} className={`d-flex Linkelem mx-auto pt-2 pb-2 ${props.mode ==='light'?'textb':'textw'}`}>
                    Fashion
                </Link>
                <Link to={`/HomeAppliances`} className={`d-flex Linkelem mx-auto pt-2 pb-2 ${props.mode ==='light'?'textb':'textw'}`}>
                    Home Appliances
                </Link>
                <Link to={`/Beauty`} className={`d-flex Linkelem mx-auto pt-2 pb-2 ${props.mode ==='light'?'textb':'textw'}`}>
                    Beauty
                </Link>
                <Link to={`/Furniture`} className={`d-flex Linkelem mx-auto pt-2 pb-2 ${props.mode ==='light'?'textb':'textw'}`}>
                    Furniture
                </Link>
                <Link to={`/Books`} className={`d-flex Linkelem mx-auto pt-2 pb-2 ${props.mode ==='light'?'textb':'textw'}`}>
                    Books
                </Link>
            </div>
        </nav>
    </>
  )
}
