import React from 'react';
import  './testimonials.scss';
import{ data} from "./TestimonialsData";
function Testimonials() {
    console.log(data);
    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                { data.map(d=>(
                <div className={d.featured ? "card featured" :"card"}>
                    <div className="top">
                        <img src="assets/right-arrow.png
                        " alt=""  className="left"/>

                        <img src={d.img}alt=""  className="user"/>

                        <img src={d.icon} alt="" className="right"/>


                    </div>
                    <div className="center">
                        {d.desc}
                    </div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                    </div>
                    
                </div>))}
            </div>
        </div>
    )
}

export default Testimonials
