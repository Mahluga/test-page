import React from 'react'
import SingleProduct from '../components/SingleProduct'
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import { LangContext } from '../context/LangContext';
const FiveProducts = () => {
  const [data] = useContext(ProductContext);
  const slicedData = data.slice(6, 12)
  const [lang, setLang] = useContext(LangContext);
  return (
    <div>
      <h1 className='text-center mt-5'>{lang === "AZ" ? "Ən Çox Satılanlar" : "The Best Seller"}</h1>
      <div className="container mt-5 mb-5">
        <div className="row g-5">
          {slicedData.map(item => (

            <SingleProduct key={item.id} alldata={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FiveProducts