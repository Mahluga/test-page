import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import slugify from 'slugify';
import swal from 'sweetalert'

const ProductDetails = () => {
    const { addItem } = useCart();
    const { slug } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then(res => setData(res.data.products))
    }, [])
    const productDetails = data.find(p => slugify(p.title) === slug)
    // console.log(productDetails);

    return (
        <div>
            {!productDetails ? <div className='d-flex justify-content-center'><img src="https://loading.io/assets/mod/spinner/spinner/lg.gif" alt="" /></div> : <div className="container col-xxl-8 px-4 py-5">
                <div className="details-pro container my-5">
                    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">{productDetails.title}</h1>
                            <p className="lead">{productDetails.description}</p>
                            <p className='price'>{productDetails.price}$</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                                <Link type="button" to='/cart' className="btn btn-outline-primary btn-lg px-4 me-md-2 fw-bold" onClick={() => {
                                    addItem(productDetails);
                                    swal({
                                        title: "Good job!",
                                        text: "Your product is added",
                                        icon: "success",
                                        button: "OK",
                                    });
                                }}>Add to cart</Link>
                                <Link to="/products" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Back</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                            <img className="rounded-lg-3" style={{ objectFit: "contain" }} />
                            <div id="carouselExample" className="carousel slide">
                                <div className="carousel-inner">
                                    {productDetails.images.map((item, c) => (
                                        <div className={`carousel-item ${c === 0 ? "active" : ""}`}>
                                            <img style={{ height: "500px", objectFit: "contain" }} src={item} className="d-block w-100" alt="img" />
                                        </div>
                                    ))}
                                </div>
                                {productDetails.images.length === 1 ? "" : <div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Next</span>
                                    </button></div>}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            }
        </div>
    )
}

export default ProductDetails