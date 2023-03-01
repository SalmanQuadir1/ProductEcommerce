import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addCart, delCart } from '../redux/action';
import './styles/Producitem.css';

const CartItem = ({ product }) => {
    console.log("Cart Products....", product);
    const [count, setCount] = useState(1);
    const dispatch = useDispatch();


    const deleteCartItem = (product) => {
        if (product.qty === 0) {
            product = null;
        }
        setTimeout(() => dispatch(delCart(product)), 2000);

        console.log("Cart Item deleted", product);
    }

    const handleButtonMinus = (e) => {
        e.stopPropagation();
        e.preventDefault();
        dispatch(delCart(product));
        if (count > 1) {
            setCount(count => count - 1);
        }

    }
    const handleButtonPlus = (e) => {
        e.stopPropagation();
        e.preventDefault();
        dispatch(addCart(product));

        setCount(count => count + 1);


    }

    return (
        <>
            <div className='container p-2  rg'>
                <div className="row ">
                    <div className='col-md-10  card shadow-lg border-0  p-1  '>

                        <div className="row">
                            <div className="col-md-3 ">
                                <img src={`data:image/png;base64,${product.images[0].image}`} alt={product.title} height="200px" width="180px" />
                            </div>

                            <div className="col-md-9  ">
                                <span className="pull-right clickable close-icon p-1 " onClick={() => deleteCartItem(product)} data-effect="fadeOut"><i class="fa fa-times "></i></span>
                                <h3 className='text-danger d-flex pt-2'>{product.productName}</h3>
                                <div className="row">
                                    <div className='col-md-5'>
                                        Price
                                        <p className='lead fw-bold'>
                                            {product.price} x

                                        </p>
                                    </div>
                                    <div className='col-md-3'>
                                        Qty
                                        <p className='lead fw-bold'>
                                            {count}

                                        </p>
                                    </div>
                                    <div className='col-md-4'>
                                        Total
                                        <p className='lead fw-bold'>
                                            = {count * product.price}

                                        </p>
                                    </div>

                                </div>

                                <button className="btn btn-outline-dark " onClick={handleButtonMinus}>
                                    <i className="fa fa-minus"></i>
                                </button>
                                <button className='btn btn-outline-dark mx-4 px-4'>{count}</button>
                                <button className="btn btn-outline-dark " onClick={handleButtonPlus}>
                                    <i className="fa fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItem