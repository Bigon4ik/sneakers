import './App.css';
import {Header} from "./component/Header/Header";
import {Cart} from "./component/Cart/Cart";
import {createContext, useEffect, useState} from "react";
import {Route,Routes} from "react-router-dom"
import axios from "axios";
import {Home} from "./pages/Home";
import {Favorites} from "./pages/Favorites";
import {User} from "./pages/User";



export const AppContext = createContext({

});


function App() {

const fakeArray=[
    {
    "title":"Мужские Кроссовки Nike Blazer Mid Suede",
    "price":250,
    "imageUrl":"{sneaker1}"
    },
    {
        "title":"Мужские Кроссовки Nike Air Max 270",
        "price":290,
        "imageUrl":"{sneaker2}"
    },
    {
        "title":"Мужские Кроссовки Nike Blazer Mid Suede",
        "price":310,
        "imageUrl":"{sneaker3}"
    },
    {
        "title":"Кроссовки Puma X Aka Boku Future Rider",
        "price":255,
        "imageUrl":"{sneaker4}"
    },
    {
        "title":"Мужские Кроссовки Under Armour Curry 8",
        "price":235,
        "imageUrl":"{sneaker5}"
    },
    {
        "title":"Мужские Кроссовки Nike LeBron XVIII",
        "price":290,
        "imageUrl":"{sneaker6}"
    }]
    const [cart,setCart]=useState(false)
    const [isLoading,setIsLoading]=useState(true)
    const [cartItems,setCartItem]=useState([])
    const [favoriteSneaker,setFavoriteSneaker]=useState([])

    const [items,setItems]=useState([])
    const [searchValue,setSearchValue]=useState("")



    useEffect(()=>{
        async function fetchData() {
            const cartResponse= await axios.get('https://63d842d5baa0f79e09a682ec.mockapi.io/cart')
            const itemsResponse= await axios.get('https://63d842d5baa0f79e09a682ec.mockapi.io/items')

            setIsLoading(false)

            setItems(itemsResponse.data)
            setCartItem(cartResponse.data)
        }
        fetchData()
    },[])

    const onClickAddSnInCart=(id,title,price,imageUrl,)=>{
        try{
            if(cartItems.find((item)=>Number(item.id) === Number(id))){
                setCartItem(prev=>prev.filter(item=>Number(item.id) !== Number(id)))
                axios.delete(`https://63d842d5baa0f79e09a682ec.mockapi.io/cart/${id}`)

            }else {
                axios.post('https://63d842d5baa0f79e09a682ec.mockapi.io/cart',{id:id,name:title,price:price,imageUrl:imageUrl})
                setCartItem([...cartItems,{id:id,name:title,price:price,imageUrl:imageUrl}])
            }
        }catch (error){
            console.log(error)
            console.log("You have a problem with addInCart")
        }

    }
    const onFavorite=async (id,title,price,imageUrl,)=>{
        try{
            if(favoriteSneaker.find((favObj)=>Number(favObj.id)===Number(id))){
                setFavoriteSneaker((prev)=>prev.filter((item)=>Number(item.id)!==Number(id)))
            }else {
                setFavoriteSneaker([...favoriteSneaker,{id,title,price,imageUrl}])
            }
        }catch (error){
            alert(`${error},problem with favorite`)

        }
        //axios.post('https://63d842d5baa0f79e09a682ec.mockapi.io/cart',{id:id,name:title,price:price,imageUrl:imageUrl})
    }

    const onChangeSearchInput = (e)=>{
        setSearchValue(e.currentTarget.value)
    }
    const onRemoveItem = (id)=>{
        setCartItem((prev)=>prev.filter(item=>item.id!==id))
        axios.delete(`https://63d842d5baa0f79e09a682ec.mockapi.io/cart/${id}`)
    }

    const isItemAdded=(id)=>{
    return cartItems.some(obj=>Number(obj.id) === Number(id))
    }
  return (
<AppContext.Provider value={{cartItems,favoriteSneaker,items,isItemAdded}}>
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
        <Routes>
            <Route path="/" exact
                   element={
                       <Home
                           items={items}
                           searchValue={searchValue}
                           setSerchValue={setSearchValue}
                           onChangeSearchInput={onChangeSearchInput}
                           onClickAddSnInCart={onClickAddSnInCart}
                           onFavorite={onFavorite}
                           cartItems={cartItems}
                           isLoading={isLoading}
                           fakeArray={fakeArray}
                           isItemAdded={isItemAdded}
                        />
                   }>
            </Route>
            <Route path="/favorites"
                   element={<Favorites/>}>
            </Route>
            <Route path="/user"
                   element={
                       <User
                       items={"one"}
                       />
                   }>
            </Route>
        </Routes>

    </div>
</AppContext.Provider>
  );
}

export default App;




// {
//     "title":"Мужские Кроссовки Nike Blazer Mid Suede",
//     "price":250,
//     "imageUrl":"{sneaker1}"
// },
// {
//     "title":"Мужские Кроссовки Nike Air Max 270",
//     "price":290,
//     "imageUrl":"{sneaker2}"
// },
// {
//     "title":"Мужские Кроссовки Nike Blazer Mid Suede",
//     "price":310,
//     "imageUrl":"{sneaker3}"
// },
// {
//     "title":"Кроссовки Puma X Aka Boku Future Rider",
//     "price":255,
//     "imageUrl":"{sneaker4}"
// },
// {
//     "title":"Мужские Кроссовки Under Armour Curry 8",
//     "price":235,
//     "imageUrl":"{sneaker5}"
// },
// {
//     "title":"Мужские Кроссовки Nike LeBron XVIII",
//     "price":290,
//     "imageUrl":"{sneaker6}"
// },
// {
//     "title":"Кроссовки Puma X Aka Boku Future Rider",
//     "price":270,
//     "imageUrl":"{sneaker7}"
// },
// {
//     "title":"Мужские Кроссовки Under Armour Curry 8",
//     "price":340,
//     "imageUrl":"{sneaker8}"
// },
// {
//     "title":"Мужские Кроссовки Nike Blazer Mid Suede",
//     "price":310,
//     "imageUrl":"{sneaker9}"
// },
// {
//     "title":"Мужские Кроссовки Nike LeBron XVIII",
//     "price":280,
//     "imageUrl":"{sneaker10}"
// }