import heartLike from "../../img/heart-like.svg";
import heartUnlike from "../../img/heart-unlike.svg";
import btnchoise from "../../img/btn-choise.svg";
import btnunchoise from "../../img/btn-unchoise.svg";
import styles from "./Sneacer.module.scss"
import {useState} from "react";



export function Sneaker(props){

    const [isAdded,setIsAdded] = useState(false)
    const [isFavorite,setIsFavorite] = useState(props.favotited)

    const onClickPlus =()=>{
        setIsAdded(!isAdded)
        props.onClickAdd(props.id,props.names,props.price,props.imageUrl)
    }
    const onClickFavorite =()=>{
        setIsFavorite(!isFavorite)
        props.onClickFavorite(props.id,props.names,props.price,props.imageUrl)
    }
    return(
    <>
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img onClick={onClickFavorite} src={isFavorite ? heartLike :heartUnlike} alt="Unliked"/>
            </div>
            <img
                width={133} height={112} src={props.imageUrl} alt="sneaker1"/>
            <h5>{props.names}</h5>
            <div className='d-flex justify-between align-center'>
                <div className='d-flex flex-column'>
                    <span>Price:</span>
                    <b>{props.price} BYN</b>
                </div>
                <div >
                    <img className={styles.plus} onClick={onClickPlus}
                          src={isAdded ? btnchoise :btnunchoise} alt="plus"/>
                </div>
            </div>

        </div>

    </>
    )
}


// ()=>props.onClickAdd(props.names,props.price,props.imageUrl)

//()=>props.onClickFavorite(props.names,props.price,props.imageUrl)