import React from 'react'
import { useContext } from 'react'
import FiveProducts from '../components/FiveProducts'
import { LangContext } from '../context/LangContext'

const Home = () => {
  const [lang, setLang] = useContext(LangContext);
  return (
    <div>
      <main>
        <section className='buttons d-flex justify-content-between gap-3 ms-5 me-5 cat-sect'>
          <button className='mt-3'><i class="fa-solid fa-volume-high"></i> {lang === "AZ" ? "Səsucaldanlar" : "Speakers"}</button>
          <button className='mt-3'><i class="fa-solid fa-laptop"></i> {lang === "AZ" ? "Noutbuklar" : "Laptops"}</button>
          <button className='mt-3'><i class="fa-solid fa-gamepad"></i> {lang === "AZ" ? "Oyunlar" : "Games"}</button>
          <button className='mt-3'><i class="fa-solid fa-tv"></i> {lang === "AZ" ? "Tv" : "Tv"}</button>
          <button className='mt-3'><i class="fa-solid fa-mobile-screen-button"></i> {lang === "AZ" ? "Telefonlar" : "Smartphones"}</button>
          <button className='mt-3'><i class="fa-solid fa-headphones"></i> {lang === "AZ" ? "Qulaqcıqlar" : "Headphones"}</button>
        </section>
        <section className='container mt-5'>
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active col-12 d-flex align-items-center justify-content-around">
                <div className='slider-part'>
                  <h1>{lang === "AZ" ? "Bir Baxışda Ən Yaxşı iPad Sövdələşmələri" : "Best Ipad Deals At A Glance"}</h1>
                  <p>{lang === "AZ" ? "ECOMAL TƏRƏFINDAN ÇATDIRILMA PULSUZDUR" : "FREE SHIPPING BY ECOMAL"}</p>
                  <p>{lang === "AZ" ? " " : "FROM"}<span>$399.99</span></p>
                  <button>SHOP NOW</button>
                </div>
                <div className=''>
                  <img src="https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/11/slide1-iphone.png" alt="" />
                </div>
              </div>
              <div className="carousel-item col-12 d-flex align-items-center justify-content-around">
                <div className='slider'>
                  <h1>All New<br /> For A Better You</h1>
                  <p>AMAZING DISCOUNTS AND DEALS</p>
                  <p>From <span>$399.99</span></p>
                  <button>SHOP NOW</button>
                </div>
                <div className=''>
                  <img src="https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/11/slide1-watches.png" alt="" />
                </div>
              </div>
              <div className="carousel-item col-12 d-flex align-items-center justify-content-around">
                <div className='slider'>
                  <h1>{lang === "AZ" ? "Bir Baxışda Ən Yaxşı iPad" : "Best Ipad Deals At A Glance"}</h1>
                  <p>{lang === "AZ" ? "ECOMAL TƏRƏFINDAN ÇATDIRILMA PULSUZDUR" : "FREE SHIPPING BY ECOMAL"}</p>
                  <p>{lang === "AZ" ? " " : "FROM"}<span>$499.99</span></p>
                  <button>{lang === "AZ" ? "İNDİ ALIŞVERİŞ ET" : "SHOP NO"}</button>
                </div>
                <div className=''>
                  <img src="https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/11/slide1-ipad.png" alt="" />
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>
      </main>
      <FiveProducts />
    </div>
  )
}

export default Home