import React, {useContext} from "react";

import {AppContext} from "../../App";
import {Link} from "react-router-dom";

export const  Info = ({image,title,description}) => {
    const {setCart} = useContext(AppContext)
    return(
        <>
            <div  className="cartEmpty d-flex align-center justify-center flex-column flex">
                <img className="mb-20" width={120} src={image} alt="InfoImg"/>
                <h2>{title}</h2>
                <p> {description}</p>
                <Link to={'/'}>
                    <button onClick={()=>setCart(false)} className="greenButton">
                        <img src="" alt=""/>Return back
                    </button>
                </Link>

            </div>
        </>
    )

}

// src="./img/CartEmpty.svg"