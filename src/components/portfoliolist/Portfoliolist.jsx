import "./portfoliolist.scss";
import React from 'react'

function Portfoliolist({title,active,setSelected,id}) {
    return(
        <li className={active ? "portfolioList active" : "portfolioList"} onClick ={ ()=> setSelected(id)}>
            {title}
        </li>
    )
}

export default Portfoliolist;

