import btnRemove from "../../img/btn-remove.svg";
import styles from "./Cart.module.scss";
import {Info} from "../Info/Info";
import {useContext, useState} from "react";
import {AppContext} from "../../App";
import axios from "axios";

const delay=(ms) => new Promise((resolve) => setTimeout(resolve,ms))


export function Cart(props){

    const {order,setOrder,cartItems,setCart,setCartItem}= useContext(AppContext)

    const [isOrder,setIsOrder] = useState(false)
    const [isLoadingCart,setIsLoadingCart] = useState(false)

    const sendOrder = async () => {
        setOrder(cartItems)
        try {
            setIsLoadingCart(true)
            setIsOrder(true)
            // console.log(cartItems)
            setCartItem([])
            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete("https://63d842d5baa0f79e09a682ec.mockapi.io/cart/" + item.id)
                await delay(100)
            }

        } catch (error) {
            alert("problem with order")
        }
        setIsLoadingCart(false)
    }
    // console.log(cartItems)
    console.log(order)


    return(
        <>
            <div className={styles.overlay}>
                <div className={styles.drawer}>
                    <h2 className='d-flex justify-between mb-30'>Cart
                        <img className='removeBtn cu-p' src={btnRemove} alt="Remove" onClick={()=>setCart(false)}/>
                    </h2>
                    <div className={styles.cartItems}>
                        {cartItems.length ===0
                            ? <Info
                                image={isOrder ? "../../img/order.png" : '../../img/cartEmpty1.png'}
                                title={isOrder? "Order send": "Cart empty"}
                                description={isOrder ? "Your order number 1" : "Add some sneaker"}/>
                            : cartItems.map((i,index)=>(
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
                    {cartItems.length ===0 ? '' :<div className={styles.cartTotalBlock}>
                        <ul>
                            <li className='justify-between'>
                                <span>Itogo:</span>
                                <div> </div>
                                <b>22</b>
                            </li>
                            <li className='justify-between'>
                                <span>Nalog:</span>
                                <div> </div>
                                <b>200p</b>
                            </li>
                        </ul>
                        <button onClick={sendOrder} className='greenButton mt-10'> Send order</button>
                    </div>}
                </div>
            </div>

        </>
    )

}