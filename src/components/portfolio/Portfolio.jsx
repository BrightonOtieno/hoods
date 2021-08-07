import React,{useState,useEffect} from 'react'
import './portfolio.scss'
import PortfolioList from "../portfoliolist/Portfoliolist";

import {contentPortfolio,featuredPortfolio,mobilePortfolio,designPortfolio,webPortfolio} from "../../data.js";


function Portfolio() {

    const [selected,setSelected] = useState("featured");
    const [data,setData] = useState([]);

    const list = [
        {
            id:'featured',
            title:"Featured",
        },
        {
            id:'web',
            title:"Web App",
        },
    
        {
            id:'data',
            title:"Data Analysis",
        },
        {
            id:'machine',
            title:"Machine Learning",
        },
        {
            id:'data-viz',
            title:"Data Viz",
        },
    ]

    useEffect(() => {
        switch(selected){
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "data":
                setData(mobilePortfolio);
                break;
            case "machine":
                setData(designPortfolio);
                break;
            case "data-viz":
                setData(contentPortfolio);
                break;
            default:
                setData(featuredPortfolio);
                
        }
    }, [selected]);
    return (
        <div className="portfolio" id="portfolio">
            <h1 style={{paddingTop:"20px",overflow:"hidden"}}>Portfolio</h1>
            <ul>
                {list.map((item)=>(
                    <PortfolioList key={item.id}
                    title={item.title}
                    active={selected===item.id}
                    setSelected ={setSelected} id={item.id} /> 
                ))}
            </ul>

            <div className="container">
                {data.map(d=>(
                    <a href={d.imgUrl}>
                    <div className="item">
                        <img src={d.img} alt={d.title} />
                        <h3>{d.title}</h3>
                    </div>
                    </a>
                ))}

            </div>
        </div>
    )
}

export default Portfolio
