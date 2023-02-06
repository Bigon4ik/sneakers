import btnRemove from "../../img/btn-remove.svg";
import styles from "./Cart.module.scss";


export function Cart(props){
    return(
        <>
            <div className={styles.overlay}>
                <div className={styles.drawer}>
                    <h2 className='d-flex justify-between mb-30'>Cart
                        <img className='removeBtn cu-p' src={btnRemove} alt="Remove" onClick={props.changeCart}/>
                    </h2>
                    <div className={styles.cartItems}>
                        {props.items.length ===0 ?
                            <div  className="cartEmpty d-flex align-center justify-center flex-column flex">
                                <img className="mb-20" width={120} height={120} src="" alt=""/>
                                <h2>Cart Empty</h2>
                                <p> Add some sneakers for order</p>
                                <button className="greenButton">
                                    <img src="" alt=""/>Return back
                                </button>
                            </div>
                            : props.items.map((i,index)=>(
                            <div key={index} className="cartItem d-flex align-center mb-20">
                                <img
                                    className='mr-20'
                                    width={70} height={70}
                                    src={i.imageUrl} alt="Sneaker"/>
                                <div className='mr-20'>
                                    <p className='mb-5'>{i.name}</p>
                                    <b>{i.price}p</b>
                                </div>
                                <img onClick={()=>{props.onRemoveItem(i.id)}}
                                     className={styles.removeBtn}
                                     src={btnRemove} alt="Remove"
                                />
                            </div>
                        ))}
                    </div>
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
                </div>
            </div>

        </>
    )

}