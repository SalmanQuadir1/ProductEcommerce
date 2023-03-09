import { useDispatch, useSelector } from 'react-redux';
import { addCart, delCart, delProd } from '../redux/action';
import { CiCircleRemove } from 'react-icons/ci';
import './styles/cart.css';
import Checkout from './Checkout';
import { addOrder } from '../redux/action/order';
import CartProduct from './CartProduct';
import { useState } from 'react';
const Cart = () => {
    const arr = useSelector((state) => state.handleCart);
    const dispatch = useDispatch();
    const [totalCartPrice, setTotalCartPrice] = useState(0);

    if (arr.length > 0) {
        localStorage.setItem('cartItems', JSON.stringify(arr));
    }


    return (
        <>

            <div className="container-fluid p-2" style={{ marginTop: '7rem' }}>
                <div className="row">
                    <div className="col-md-9">
                        <CartProduct arr={arr} totalCartPrice={totalCartPrice} setTotalCartPrice={setTotalCartPrice} />
                    </div>

                    <div className='col-md-3'>
                        <Checkout arr={arr} totalCartPrice={totalCartPrice} key={arr.id} onClick={() => dispatch(addOrder(arr, totalCartPrice))} />
                    </div>

                </div>
            </div>


        </>
        // <CartItem product={product} key={product.id}></CartItem>
    )


    // const showCartEmpty = () => {
    //     return (
    //         <>
    //             <div>Cart has no items !!</div>
    //             <div>Cart has no items !!</div>

    //         </>
    //     )
    // }

    // return (
    //     <>
    //         {arr.length !== 0 ? arr.map(CartItems) : showCartEmpty}
    //     </>
    // )

}

export default Cart;