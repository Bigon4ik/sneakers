import React, {useContext} from "react";
import cartEmpty from "../../img/cartEmpty1.png"

import {AppContext} from "../../App";

export const  Info = ({image,title,description}) => {
    const {setCart} = useContext(AppContext)
    return(
        <>
            <div  className="cartEmpty d-flex align-center justify-center flex-column flex">
                <img className="mb-20" width={120} src={image} alt="InfoImg"/>
                <h2>{title}</h2>
                <p> {description}</p>
                <button onClick={()=>setCart(false)} className="greenButton">
                    <img src="" alt=""/>Return back
                </button>
            </div>
        </>
    )

}

// src="./img/CartEmpty.svg"