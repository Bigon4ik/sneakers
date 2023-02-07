import React from "react";
import styles from "../Cart/Cart.module.scss";


export const  Info = () => {
    return(
        <>
            <div className={styles.cartTotalBlock}>
                <ul>
                    <li className='justify-between'>
                        <span>Itogo:</span>
                        <div>

                        </div>
                        <b>1034p</b>
                    </li>
                    <li className='justify-between'>
                        <span>Nalog:</span>
                        <div>

                        </div>
                        <b>200p</b>
                    </li>
                </ul>
                <button className='greenButton mt-10'> Send order</button>
            </div>
        </>
    )

}