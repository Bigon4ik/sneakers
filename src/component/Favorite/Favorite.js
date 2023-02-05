
import {Cart} from "../Cart/Cart";
import {Header} from "../Header/Header";
import {Search} from "../Search/Search";
import {Sneaker} from "../Sneaker/Sneaker";


export function Favorite(props){
    return(
        <>
            <div className='wrapper clear'>
                {cart && <Cart items={cartItems}
                               cart={cart}
                               onRemoveItem={onRemoveItem}
                               changeCart={()=>{setCart(false)}}
                />
                }
                <Header
                    changeCart={()=>{setCart(true)}}
                />
                <div>
                    <div className='content p-40'>
                        <Search searchValue={searchValue}
                                onChangeValue={onChangeSearchInput}
                        />
                        <div className="d-flex flex-wrap">
                            {items
                                .filter((item=>item.title.toLowerCase().includes(searchValue)))
                                .map((s,index)=>(
                                    <Sneaker
                                        key={index}
                                        id={s.id}
                                        imageUrl={s.imageUrl}
                                        names={s.title} price={s.price}
                                        onClickAdd={onClickAddSnInCart}
                                        onClickFavorite={onFavorite}
                                    />))}

                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}