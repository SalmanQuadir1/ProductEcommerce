import { useDispatch, useSelector } from 'react-redux';
import { addCart, delCart, delProd } from '../redux/action';
import { CiCircleRemove } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom'
import './styles/cart.css';
import Checkout from './Checkout';

const Cart = () => {
    const arr = useSelector((state) => state.handleCart);
    const dispatch = useDispatch();
  
    
    var totalCartPrice = 0;
   

    return (
        <>

            <div className="container-fluid p-2" style={{ marginTop: '7rem' }}>
                <div className="row">
                    <div className="col-md-9">
                        {/* <h2 className='text-center ' style={{ letterSpacing: '2rem', textTransform: 'uppercase', marginBottom: '1rem' }}>Cart Items</h2> */}
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col " className='text-center text-uppercase'>Image</th>
                                    <th scope="col " className='text-center  text-uppercase'>Name</th>
                                    <th scope="col " className='text-center text-uppercase'>Price</th>
                                    <th scope="col " className='text-left text-uppercase'>Quantity</th>
                                    <th scope="col " className='text-center text-uppercase'>SubTotal</th>
                                    <th scope="col " className='text-center text-uppercase'>Remove</th>

                                </tr>
                            </thead>
                            <tbody>

                                {arr.map((product) => {
                                    totalCartPrice += product.price * product.qty;
                                    return (



                                        <tr>
                                            <th scope="row" >
                                                <img src={`data:image/png;base64,${product.images[0].image}`} alt={product.title} height="100px" width="100px" />

                                            </th>
                                            <td className='align-middle font-weight-bold'><b>{product.productName}</b></td>
                                            <td className='align-middle font-weight-bold'> <b>&#8377;{product.price}</b></td>
                                            <td className='align-middle text-center'>

                                                <div class="input-group  ">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text p-3 rounded-0" onClick={() => dispatch(delCart(product))}> <i className="fa fa-minus" ></i></span>
                                                    </div>
                                                    <input style={{ width: '4rem' }} type="text" className="text-center border  border-default" value={product.qty} />
                                                    <div class="input-group-append">
                                                        <span class="input-group-text p-3 rounded-0" onClick={() => dispatch(addCart(product))}><i className="fa fa-plus"></i></span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='align-middle text-center' ><span  ><b>&#8377;{product.price * product.qty}</b></span></td>
                                            <td className='align-middle removeBtn text-center' > <CiCircleRemove size={30} onClick={() => {
                                                dispatch(delProd(product))
                                            }}
                                            /></td>

                                        </tr>
                                    )
                                })
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className='col-md-3'>
                       <Checkout arr={arr} totalCartPrice={totalCartPrice}/>
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