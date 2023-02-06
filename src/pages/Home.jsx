import {Search} from "../component/Search/Search";
import {Sneaker} from "../component/Sneaker/Sneaker";

export function Home(props){
    return(
        <>
            <div>
                <div className='content p-40'>
                    <Search
                        serchTitle={"All sneakers"}
                        searchValue={props.searchValue}
                        onChangeValue={props.onChangeSearchInput}
                    />
                    <div className="d-flex flex-wrap">
                        {props.items
                            .filter((item=>item.title.toLowerCase().includes(props.searchValue)))
                            .map((s,index)=>(
                                <Sneaker
                                    key={index}
                                    id={s.id}
                                    imageUrl={s.imageUrl}
                                    names={s.title} price={s.price}
                                    favotited={false}
                                    onClickAdd={props.onClickAddSnInCart}
                                    onClickFavorite={props.onFavorite}
                                />))}

                    </div>
                </div>
            </div>
        </>
    )
}