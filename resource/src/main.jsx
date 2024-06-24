import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './assets/scss/style.scss'
import './assets/images/iphone.jpg'
import { ProductProvider } from '../context/ProductContext.jsx'
import { CartProvider } from 'react-use-cart'
import { WishlistProvider } from "react-use-wishlist";
import { LangProvider } from '../context/LangContext.jsx'
import './assets/css/style.css'
import { ModeProvider } from '../context/ModeContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
 
 <ModeProvider>
   <LangProvider>
    <CartProvider>
      <WishlistProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </WishlistProvider>
    </CartProvider>
  </LangProvider>
  </ModeProvider>

)
