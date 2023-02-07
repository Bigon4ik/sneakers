import React from "react";
import cartEmpty from "../../img/cartEmpty1.png"

export const  Info = ({title,description}) => {
    return(
        <>
            <div  className="cartEmpty d-flex align-center justify-center flex-column flex">
                <img className="mb-20" width={120} height={120} src={cartEmpty} alt="cartEmpty"/>
                <h2>{title}</h2>
                <p> {description}</p>
                <button className="greenButton">
                    <img src="" alt=""/>Return back
                </button>
            </div>
        </>
    )

}

// src="./img/CartEmpty.svg"