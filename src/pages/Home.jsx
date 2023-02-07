import {Search} from "../component/Search/Search";
import {Sneaker} from "../component/Sneaker/Sneaker";
import {useContext} from "react";
import {AppContext} from "../App";

export function Home(props){
    const {items,searchValue} = useContext(AppContext)

    const filteredItems= items.filter((item)=>
    item.title.toLowerCase().includes(searchValue))
    const renderItems =()=>{
        return (props.isLoading ? [...Array(8)]
                : filteredItems).map((s,index)=>(
                        <Sneaker
                            key={index}
                            id={s && s.id}
                            imageUrl={s && s.imageUrl}
                            names={s && s.title}
                            price={s && s.price}
                            favotited={false}
                            isLoading={props.isLoading}
                        />))}
    return(
        <>
            <div>
                <div className='content p-40'>
                    <Search serchTitle={"All sneakers"}/>
                    <div className="d-flex flex-wrap">
                        {renderItems()}

                    </div>
                </div>
            </div>
        </>
    )
}



{/*                        {props.isLoading ? props.fakeArray.map((s,index)=>(*/}
{/*        <Sneaker*/}
{/*            key={index}*/}
{/*            id={s.id}*/}
{/*            imageUrl={s.imageUrl}*/}
{/*            names={s.title} price={s.price}*/}
{/*            favotited={false}*/}
{/*            onClickAdd={props.onClickAddSnInCart}*/}
{/*            onClickFavorite={props.onFavorite}*/}
{/*            isLoading={props.isLoading}*/}
{/*        />))*/}
{/*    : <>{props.items*/}
{/*        .filter((item=>item.title.toLowerCase().includes(props.searchValue)))*/}
{/*        .map((s,index)=>(*/}
{/*            <Sneaker*/}
{/*                key={index}*/}
{/*                id={s.id}*/}
{/*                imageUrl={s.imageUrl}*/}
{/*                names={s.title} price={s.price}*/}
{/*                favotited={false}*/}
{/*                onClickAdd={props.onClickAddSnInCart}*/}
{/*                onClickFavorite={props.onFavorite}*/}
{/*                isLoading={props.isLoading}*/}
{/*            />))}*/}
{/*    </>*/}
{/*}*/}