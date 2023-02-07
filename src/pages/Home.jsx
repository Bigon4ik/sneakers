import {Search} from "../component/Search/Search";
import {Sneaker} from "../component/Sneaker/Sneaker";
import {useContext} from "react";
import {AppContext} from "../App";

export function Home(props){

    // const filteredItems= props.items.filter((item)=>
    // item.title.toLowerCase().includes(props.searchValue))
    // const renderItems =()=>{
    //     return (props.isLoading ? props.fakeArray
    //             : filteredItems).map((s,index)=>(
    //                     <Sneaker
    //                         key={index}
    //                         id={s.id}
    //                         imageUrl={s.imageUrl}
    //                         names={s.title} price={s.price}
    //                         favotited={false}
    //                         onClickAdd={props.onClickAddSnInCart}
    //                         onClickFavorite={props.onFavorite}
    //                         added={props.cartItems.some(obj=>Number(obj.id) === Number(s.id))}
    //                         isLoading={props.isLoading}
    //                     />))}
    //

    //const {isItemAdded} = useContext(AppContext)

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
                        {props.isLoading ? props.fakeArray.map((s,index)=>(
        <Sneaker
            key={index}
            id={s.id}
            imageUrl={s.imageUrl}
            names={s.title} price={s.price}
            favotited={false}
            onClickAdd={props.onClickAddSnInCart}
            onClickFavorite={props.onFavorite}
            //added={isItemAdded(s.id)}
            isLoading={props.isLoading}
        />))
    : <>{props.items
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
                //added={props.cartItems.some(obj=>Number(obj.id) === Number(s.id))}
                isLoading={props.isLoading}
            />))}
    </>
}
                    </div>
                </div>
            </div>
        </>
    )
}

