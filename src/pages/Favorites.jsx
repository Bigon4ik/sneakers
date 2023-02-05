import {Search} from "../component/Search/Search";
import {Sneaker} from "../component/Sneaker/Sneaker";



export function Favorites(props){
    return(
        <>
            <div>
                <div className='content p-40'>
                    <Search
                        serchTitle={"My favorites"}
                        searchValue={props.searchValue}
                        onChangeValue={props.onChangeSearchInput}
                    />
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
                                        //onClickAdd={props.onClickAddSnInCart}
                                        //onClickFavorite={props.onFavorite}
                                    />))}

                        </div>
                        :"My favorites empty"}

                </div>
            </div>
        </>
    )
}