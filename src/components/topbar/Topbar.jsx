import React from 'react'
import './topbar.scss'

import {Person,Mail} from "@material-ui/icons"

function Topbar({menuOpen,setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")} id="topbar">
            <div className="wrapper">

                <div className="left">
                    <a href="#intro" className ="logo">Hoody.</a>
                    <div className="itemContainer">
                        <Person classname="icon"/>
                        <span> 0789026157</span>

                    </div>

                    <div className="itemContainer">
                        <Mail classname="icon"/>
                        <span><a style={{textDecoration:"none"}} href="https://www.linkedin.com/in/abungu-b-697755161/">linkedIn</a>  </span>

                    </div>
                </div>

                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
