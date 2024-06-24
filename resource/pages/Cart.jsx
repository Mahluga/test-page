import React from 'react'
import { useCart } from 'react-use-cart'
import { useContext } from 'react';
import { LangContext } from '../context/LangContext';


const Cart = () => {
    const { isEmpty, items, updateItemQuantity, removeItem, cartTotal, emptyCart } = useCart();
    const [lang, setLang] = useContext(LangContext);

    return (
        <>
            {isEmpty ? <div className='d-flex justify-content-center align-items-center'><img src="https://schoolville.com/assets/img/empty-cart-illustration.gif" alt="" /></div> : <div className='d-flex justify-content-center align-items-center flex-column'>
                <h1 className='mt-5'>{lang === "AZ" ? "Sənin alışveriş səbətin" : "Your Shopping Cart"}</h1>
                <div className="col-6">
                    <table className="table my-5">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">{lang === "AZ" ? "Şəkil" : "Photo"}</th>
                                <th scope="col">{lang === "AZ" ? "Başlıq" : "Title"}</th>
                                <th scope="col">{lang === "AZ" ? "Qiymət" : "Price"}</th>
                                <th scope="col">{lang === "AZ" ? "Say" : "Quantity"}</th>
                                <th scope="col">{lang === "AZ" ? "Sil" : "Delete"}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(item => (
                                <tr>
                                    <th scope="row">1</th>
                                    <td><img width={100} height={80} src={item.images[0]} alt={item.title} /></td>
                                    <td>{item.title}</td>
                                    <td>{item.price * item.quantity}$</td>
                                    <td>
                                        <button className='btn btn-outline-primary' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                        <span className='mx-2'>{item.quantity}</span>
                                        <button className='btn btn-outline-primary' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                    </td>
                                    <td><button className='btn btn-outline-primary' onClick={() => removeItem(item.id)}><i class="fa-solid fa-trash-can"></i></button></td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={3}>
                                    <button className='btn btn-outline-primary mt-2'>{lang === "AZ" ? "Ümumi Qiymət" : "Total Price"}: {cartTotal}</button>
                                </td>
                                <td colSpan={3}>
                                    <button className='btn btn-outline-primary mt-2' onClick={() => {
                                        swal({
                                            title: "Are you sure?",
                                            text: "Once deleted, you will not be able to recover this product!",
                                            icon: "warning",
                                            buttons: true,
                                            dangerMode: true,
                                        })
                                            .then((willDelete) => {
                                                if (willDelete) {
                                                    emptyCart();
                                                    swal("Poof! Your product has been deleted!", {
                                                        icon: "success",
                                                    });
                                                } else {
                                                    swal("Your product is in cart!");
                                                }
                                            });

                                    }}>{lang === "AZ" ? "Hamısını Sil" : "Clear All"}</button>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

            </div>}
        </>
    )
}

export default Cart