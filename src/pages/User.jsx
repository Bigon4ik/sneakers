import {Search} from "../component/Search/Search";
import {Sneaker} from "../component/Sneaker/Sneaker";

export function User(props){
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
                        :"My order empty"}

                </div>
            </div>
        </>
    )
}