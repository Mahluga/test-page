import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { ProductContext } from '../context/ProductContext';
import { LangContext } from "../context/LangContext";
import { useState } from 'react';
import slugify from 'slugify';
import { ModeContext } from '../context/ModeContext';
const Header = () => {
    const { totalItems } = useCart();
    const [data] = useContext(ProductContext);
    const [keyword, setKeyword] = useState("");
    const [lang, setLang] = useContext(LangContext);
    const [mode, setMode] = useContext(ModeContext);
    return (
        <div>
            <header>
                <nav className="navbar navbar-first navbar-expand-lg">
                    <div className="container-fluid">
                        <Link className="ms-5 navbar-brand" to="/"><img src="https://ecomall-be87.kxcdn.com/ecomall/wp-content/themes/ecomall/images/logo.png" alt="" /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <div className="form-input collapse navbar-collapse" id="navbarSupportedContent">
                                <form className="navbar-nav me-auto mb-2 ms-auto mb-lg-0 d-flex justify-content-between">
                                    <select name="" id="" className='ps-2'>
                                        <option value="">{lang === "AZ" ? "Bütün Kateqoriyalar" : "All Categories"}</option>
                                    </select>
                                    <input type="text" placeholder='| Search for products' />
                                    <button>{lang === "AZ" ? "Axtar" : "Search"}</button>
                                </form>
                            </div>
                        </button>
                        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">{lang === "AZ" ? "Məhsulu axtar" : "Search product"}</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                    </div>
                                    <div className="modal-body">
                                        <div className="input-group mb-3">
                                            <input onChange={m => setKeyword(m.target.value)} type="text" className="form-control" placeholder="Enter product name" />
                                            <button className="btn btn-outline-secondary" type="button" id="button-addon2">{lang === "AZ" ? "Axtar" : "Search"}</button>
                                        </div>
                                    </div>
                                    <ul className="list-group">
                                        {!keyword ? (
                                            ""
                                        ) : (
                                            data.filter(p => p.title.toLowerCase().includes(keyword)).length === 0 ? (
                                                <li className="list-group-item">{lang === "AZ" ? "Məhsul tapılmadı" : "No products found"}</li>
                                            ) : (
                                                data.filter(p => p.title.toLowerCase().includes(keyword)).map(item => (
                                                    <Link to={`/products/${slugify(item.title)}`} className="list-group-item" key={item.id}>
                                                        <div data-bs-dismiss="modal">
                                                            <img style={{ objectFit: "cover" }} src={item.images[0]} height={70} width={70} alt="img" />
                                                            <span className='ms-3'>{item.title}</span>
                                                        </div>
                                                    </Link>
                                                ))
                                            )
                                        )}
                                    </ul>

                                </div>
                            </div>
                        </div>
                        <ul className="d-flex gap-5 mt-3 me-5">
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="fa-solid fa-headphones"></i> <span>{lang === "AZ" ? "Köməyə ehtiyacınız var?" : "Need Help?"}</span><br /> +08 9229 8228</a>
                            </li>
                            <li class="nav-item">
                                <Link to='/login' class="nav-link" href="#"><i class="fa-regular fa-user"></i> <span>{lang === "AZ" ? "Mənim Hesabım" : "My Account"}</span> <br />{lang === "AZ" ? "Giriş" : "Login"}</Link>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link" to="/cart"></NavLink>
                            </li>
                            <Link to='/cart' class="cart-btn btn btn-primary position-relative my-2" style={{height:50}}>
                                <i class="cart fa-solid fa-cart-shopping mt-2"></i>
                                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {totalItems}
                                </span>
                            </Link>
                            <li class="nav-item mt-3">
                                <button type='button' onClick={() => {
                                    lang === "AZ" ? setLang("EN") : setLang("AZ");
                                    lang === "AZ" ? localStorage.setItem("lang", "EN") : localStorage.setItem("lang", "AZ");
                                }} className='lang-btn btn btn-primary position-relative'>{lang === "AZ" ? "EN" : "AZ"}</button>
                            </li>
                            <li>
                                <button onClick={() => {
                                    mode === "light" ? setMode("dark") : setMode("light");
                                    mode === "light" ? localStorage.setItem("mode", "dark") : localStorage.setItem("mode", "light");
                                }} type="button" className="btn btn-primary position-relative mt-3" style={{ fontWeight: "bolder" }}>
                                    {mode === "light" ? "dark" : "light"}
                                </button>
                            </li>
                            <li>
                                <Link to='/dashboard' className="btn btn-primary my-3">Dashboard</Link>
                            </li>

                        </ul>
                    </div>
                </nav> <hr />
            </header>

            <nav className='second-nav d-flex justify-content-between'>
                <p className='text ms-5'><i class="me-3 fa-solid fa-bars"></i>{lang === "AZ" ? "Bütün Kateqoriyalar" : "Shop Categories"}</p>
                <ul className='d-flex gap-4 me-auto ms-3'>
                    <li><NavLink to="/products">{lang === "AZ" ? "Məhsullar" : "Products"} <i class="fa-solid fa-caret-down"></i></NavLink></li>
                    <li>{lang === "AZ" ? "Noutbuklar" : "Laptops"}<i class="fa-solid fa-caret-down"></i></li>
                    <li>{lang === "AZ" ? "Telefonlar" : "Smartphones"}<i class="fa-solid fa-caret-down"></i></li>
                    <li>{lang === "AZ" ? "Qulaqcıqlar" : "Headphones"} <i class="fa-solid fa-caret-down"></i></li>
                    <li>{lang === "AZ" ? "Kamera" : "Camera"}</li>
                    <li className='ms-5'><NavLink to="/wishlist"><i class="fa-regular fa-heart"></i></NavLink></li>
                </ul>
                <p className='text-p me-5'>{lang === "AZ" ? "Günün hesabatı" : "Today Deal"}</p>
            </nav>
        </div>
    )
}

export default Header