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
                        <span> +44 924 12 74 </span>

                    </div>

                    <div className="itemContainer">
                        <Mail classname="icon"/>
                        <span> hoody@company.com </span>

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
