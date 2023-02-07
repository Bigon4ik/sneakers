import {Search} from "../component/Search/Search";
import {Sneaker} from "../component/Sneaker/Sneaker";
import {useContext} from "react";
import {AppContext} from "../App";
import {Info} from "../component/Info/Info";

export function User(props){
    const {}=useContext(AppContext)

    return(
        <>
            <div>
                <div className='content p-40'>
                    <Search serchTitle={"My order"}/>
                    {props.items>0?
                        <div className="d-flex flex-wrap">

                            {props.items
                                //.filter((item=>item.title.toLowerCase().includes(props.searchValue)))
                                .map((s,index)=>(
                                    <Sneaker
                                        key={index}
                                        id={s.id}
                                        favotited={true}
                                        imageUrl={s.imageUrl}
                                        names={s.title} price={s.price}
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