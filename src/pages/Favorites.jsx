import {Search} from "../component/Search/Search";
import {Sneaker} from "../component/Sneaker/Sneaker";
import {useContext} from "react";
import {AppContext} from "../App";
import {Info} from "../component/Info/Info";



export function Favorites(props){
    const {favoriteSneaker} = useContext(AppContext)

    return(
        <>
                <div className='content p-40'>
                    <Search serchTitle={"My favorites"}/>
                    {favoriteSneaker.length>0?
                        <div className="d-flex flex-wrap">
                            {favoriteSneaker
                                .map((s,index)=>(
                                    <Sneaker
                                        key={index}
                                        id={s.id}
                                        favotited={true}
                                        imageUrl={s.imageUrl}
                                        names={s.title} price={s.price}
                                    />))}

                        </div>
                        :<Info title={"Your favorites empty"}
                               image={"../../img/orderEmpty.png"}
                               description={"Choose some sneaker"}
                        />}

                </div>
        </>
    )
}