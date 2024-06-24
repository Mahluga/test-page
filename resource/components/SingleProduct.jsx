import React from 'react'
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import { useCart } from 'react-use-cart'
import swal from 'sweetalert'
import { useWishlist } from "react-use-wishlist";
import { LangContext } from '../context/LangContext';
import { useContext } from 'react';
const SingleProduct = ({ alldata }) => {
  const { addItem } = useCart();
  const { addWishlistItem } = useWishlist();
  const [lang, setLang] = useContext(LangContext);
  return (
    <div className='col-12 col-sm-6 col-md-4'>
      <div className="card" >
        <img height={350} style={{ objectFit: "contain" }} src={alldata.images[0]} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{alldata.title.slice(0, 10)}...</h5>
          <p className="card-text">{alldata.description.slice(0, 20)}...</p>
          <Link to={`/products/${slugify(alldata.title)}`} className="btn btn-primary">{lang === "AZ" ? "Daha çox oxu" : "Read More"}</Link>
          <button className='btn btn-outline-primary ms-2' onClick={() => {
            addItem(alldata);
            swal({
              title: "Good job!",
              text: "Your product is added",
              icon: "success",
              button: "OK",
            });
          }}>{lang === "AZ" ? "Səbətə əlavə et" : "Add to Cart"}</button>
          <button className='wishlist-btn btn btn-outline-light ms-1' onClick={() => addWishlistItem(alldata)}><i class="wishlist heart fa-solid fa-heart"></i></button>
        </div>
      </div>
    </div>

  )
}

export default SingleProduct