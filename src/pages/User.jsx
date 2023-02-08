import {Search} from "../component/Search/Search";
import {Sneaker} from "../component/Sneaker/Sneaker";
import {useContext} from "react";
import {AppContext} from "../App";
import {Info} from "../component/Info/Info";

export function User(){
    const {order}=useContext(AppContext)
    console.log(order)
    return(
        <>
            <div>
                <div className='content p-40'>
                    <Search serchTitle={"My order"}/>
                    {order?
                        <div className="d-flex flex-wrap">
                            {order
                                .map((s,index)=>(
                                    <Sneaker
                                        key={index}
                                        id={s.id}
                                        imageUrl={s.imageUrl}
                                        names={ s.name}
                                        price={s.price}
                                        favotited={false}
                                    />))}

                        </div>
                        :<Info title={"Your order empty"}
                               image={"../../img/orderEmpty.png"}
                               description={"Make some order"}
                        />}

                </div>
            </div>
        </>
    )
}