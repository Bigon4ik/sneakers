import heartLike from "../../img/heart-like.svg";
import heartUnlike from "../../img/heart-unlike.svg";
import btnchoise from "../../img/btn-choise.svg";
import btnunchoise from "../../img/btn-unchoise.svg";
import styles from "./Sneacer.module.scss"
import {useContext, useState} from "react";
import ContentLoader from "react-content-loader";
import {AppContext} from "../../App";



export function Sneaker(props){

    const {isLoading,isItemAdded,onClickAddSnInCart,onFavorite} = useContext(AppContext)

    const [isFavorite,setIsFavorite] = useState(props.favotited)

    const onClickPlus =()=>{
       onClickAddSnInCart(props.id,props.names,props.price,props.imageUrl)
    }
    const onClickFavorite =()=>{
        setIsFavorite(!isFavorite)
        onFavorite(props.id,props.names,props.price,props.imageUrl)
    }


    return(
        <div className={styles.card}>
            {isLoading ? <ContentLoader
                speed={2}
                width={150}
                height={255}
                viewBox="0 0 150 255"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
                {...props}
            >
                <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
                <rect x="0" y="100" rx="10" ry="10" width="150" height="15" />
                <rect x="0" y="120" rx="10" ry="10" width="100" height="15" />
                <rect x="110" y="140" rx="10" ry="10" width="40" height="40" />
                <rect x="-1" y="147" rx="10" ry="10" width="100" height="30" />
            </ContentLoader>
                :
                <>
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
                src={isItemAdded(props.id) ? btnchoise : btnunchoise} alt="plus"/>
                </div>
                 </div>
            </>}
        </div>

    )
}


// ()=>props.onClickAdd(props.names,props.price,props.imageUrl)

//()=>props.onClickFavorite(props.names,props.price,props.imageUrl)