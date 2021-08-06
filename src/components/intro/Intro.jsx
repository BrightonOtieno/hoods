import React from 'react'
import './intro.scss'
import {init} from 'ityped';
import {useEffect ,useRef } from 'react';

function Intro() {
    const textRef = useRef();
     // used the span as a reference (its like document.querySelector)
    useEffect(() => {
        //console.log(textRef);
        // initialize the item 

        init(textRef.current,{
            showCursor:true,
            backDelay:1500, // 1 and half second
            backSpeed:60,
            strings:[" Web Developer"," Web & Data Designer","Data Analyst"]
        });


    }, []);
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imageContainer">
                
                        <img src="assets/profile.jpg" alt="portfolio-pic" />
                    
                </div>
            </div>


            <div className="right">
                <div className="wrapper">
                    <h2> Hi there ,I'm</h2>
                    <h1>Brighton Otieno</h1>
                    <h3>Freelance <span ref={textRef}></span> </h3>
                </div>

                <a href="#portfolio">
                    <img src="assets/down.png" alt="down arrow" />
                </a>

            </div>


        </div>
    )
}

export default Intro
