import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Header from '../components/Header'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import ProductDetails from '../pages/ProductDetails'
import Error from '../pages/Error'
import Cart from '../pages/Cart'
import Wishlist from '../pages/Wishlist'
import './assets/scss/style.scss'
import './assets/css/style.css'
import Login from './auth/Login'
import Register from './auth/Register'
import { ModeContext } from '../context/ModeContext'
import { useContext } from 'react'


const Main = () =>{
  return(
    <>
  <Header />    
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="*" element={<Error />}></Route>
                <Route path="/products" element={<Shop />}></Route>
                <Route path="/products/:slug" element={<ProductDetails />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
                <Route path="/wishlist" element={<Wishlist />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                
            </Routes>
    </>
  )
}


const App = () => {
  const [mode] = useContext(ModeContext);
  return (
    <div>  
       <BrowserRouter>
       <div className={mode}>
     <Main />
       </div>
        </BrowserRouter>
    </div>
  )
}

export default App