import React from 'react'
import { useWishlist } from "react-use-wishlist";
import { useCart } from 'react-use-cart';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { LangContext } from '../context/LangContext';
const Wishlist = () => {
  const { items, removeWishlistItem, isWishlistEmpty, emptyWishlist } = useWishlist();
  const { addItem } = useCart();
  const [lang, setLang] = useContext(LangContext);
  return (
    <>
      {isWishlistEmpty ? <div className='d-flex justify-content-center align-items-center flex-column'><img src="https://i.pinimg.com/originals/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.png" alt="" /><Link to='/products' className='btn btn-dark'>Add product to your wishlist</Link></div> : <div >
        <h1 className='my-5 text-center'>{lang === "AZ" ? "Sevimlilərin" : "Your Wishlist"}</h1>
        <div className='d-flex justify-content-center align-items-center flex-column'>
          {items.map(item => (
            <div className="card mb-3 col-6">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={item.images[0]} width={150} height={150} style={{ objectFit: "contain" }} className="img-fluid rounded-start mt-2 ms-2" alt={item.title} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.price}$</p>
                    <button className='btn btn-outline-primary ms-2' onClick={() => {
                      addItem(item);
                      swal({
                        title: "Good job!",
                        text: "Your product is added",
                        icon: "success",
                        button: "OK",
                      });
                    }}>{lang === "AZ" ? "Səbətə Əlavə Et" : "Add to Cart"}</button>
                    <button className='btn btn-outline-primary ms-2' onClick={() => removeWishlistItem(item.id)}><i class="fa-solid fa-trash-can"></i></button>
                  </div>
                </div>
              </div>

            </div>

          ))}
          <button className='btn btn-primary mb-5' onClick={() => {
            emptyWishlist();
          }}>{lang === "AZ" ? "Hamısını Sil" : "Clear All"}</button>

        </div>
      </div>}
    </>
  )
}

export default Wishlist