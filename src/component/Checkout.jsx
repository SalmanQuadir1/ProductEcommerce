import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addOrder } from '../redux/action/order';
import { v1 as uuidv1 } from 'uuid';

import './styles/checkout.css';

const orderInitialState = {
  orderId: '',
  products: [],
  user: '',
  totalCartPrice: '',
  address: ''

}
const Checkout = ({ arr, totalCartPrice }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [order, setOrder] = useState(orderInitialState);

  const handleCheckout = (arr, totalCartPrice) => {
    orderInitialState.orderId = uuidv1();
    orderInitialState.products = arr;
    orderInitialState.user = JSON.parse(localStorage.getItem('user'));
    orderInitialState.totalCartPrice = totalCartPrice;
    setOrder(orderInitialState);
    dispatch(addOrder(order));

  }

  return (
    <>
      <div className='card c1 shadow-lg border-0 '>
        <h5 className='text-center card-header p-4 '>ORDER SUMMARY</h5>

        <div className='row'>
          <p className='mx-2 '><u>Cart Items({arr.length})</u></p>
          <div className='col-md-6'>
            <ol>
              {arr.map((pro) => (

                <li key={pro.id}>{pro.productName.toUpperCase()}</li>
              ))}
            </ol>
          </div>
          {/* <div className='col-md-6'>
            <ul>Price
              {arr.map((pro) => (

                <li>&#8377;{pro.price * pro.qty}</li>
              ))}
            </ul>
          </div> */}

        </div>



        <h5 className='m-3'>Cart Total: <b>&#8377;{totalCartPrice}</b></h5>

        <button class="btn btn-danger mx-2 " onClick={() => handleCheckout(arr, totalCartPrice)}>Checkout </button>
        <button class="btn btn-warning mx-2 my-2" onClick={() => navigate('/address')}>Address </button>
      </div>
    </>



  )
}

export default Checkout