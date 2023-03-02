import React from 'react'
import { useNavigate } from 'react-router-dom';
import './styles/checkout.css';

const Checkout = ({ arr, totalCartPrice }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className='card c1 shadow-lg border-0 '>
        <h5 className='text-center card-header p-2 '>ORDER SUMMARY</h5>

        <div className='row'>
          <p className='mx-2 '><u>Cart Items({arr.length})</u></p>
          <div className='col-md-6'>
            <ol>
              {arr.map((pro) => (

                <li>{pro.productName.toUpperCase()}</li>
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
        <button class="btn btn-danger mx-2 my-2" onClick={()=>navigate('/checkout')}>Checkout </button>

      </div>
    </>



  )
}

export default Checkout