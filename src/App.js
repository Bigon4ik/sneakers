import './App.css';
import {Header} from "./component/Header/Header";
import {Cart} from "./component/Cart/Cart";
import {Search} from "./component/Search/Search";
import {Component, useEffect, useState} from "react";
import {Route,Routes} from "react-router-dom"
import axios from "axios";
import {Home} from "./pages/Home";


function App() {


    const [cart,setCart]=useState(false)
    const [cartItems,setCartItem]=useState([])
    const [favoriteSneaker,setFavoriteSneaker]=useState([])

    const [items,setItems]=useState([])
    const [searchValue,setSearchValue]=useState("")


    useEffect(()=>{
        axios.get('https://63d842d5baa0f79e09a682ec.mockapi.io/items')
            .then((res)=>{
                setItems(res.data)
                console.log(res.data)
            })
        axios.get('https://63d842d5baa0f79e09a682ec.mockapi.io/cart')
            .then((res)=>{
                setCartItem(res.data)
            })
    },[])

    const onClickAddSnInCart=(id,title,price,imageUrl,)=>{
        setFavoriteSneaker([...cartItems,{id:id,name:title,price:price,imageUrl:imageUrl}])
        axios.post('https://63d842d5baa0f79e09a682ec.mockapi.io/cart',{id:id,name:title,price:price,imageUrl:imageUrl})
    }
    const onFavorite=(id,title,price,imageUrl,)=>{
        setCartItem([...cartItems,{id:id,name:title,price:price,imageUrl:imageUrl}])
        //axios.post('https://63d842d5baa0f79e09a682ec.mockapi.io/cart',{id:id,name:title,price:price,imageUrl:imageUrl})
    }

    const onChangeSearchInput = (e)=>{
        setSearchValue(e.currentTarget.value)
    }
    const onRemoveItem = (id)=>{
        setCartItem((prev)=>prev.filter(item=>item.id!==id))
        axios.delete(`https://63d842d5baa0f79e09a682ec.mockapi.io/cart/${id}`)
    }

  return (

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
            <Route path="/" element={''}>
            </Route>
            <Route path="/favorites" element={"asdsfsa"}>
            </Route>


        </Routes>
        <Home
            items={items}
            searchValue={searchValue}
            setSerchValue={setSearchValue}
            favoriteSneaker={favoriteSneaker}
            onChangeSearchInput={onChangeSearchInput}
            onClickAddSnInCart={onClickAddSnInCart}
            onFavorite={onFavorite}
        />
    </div>
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