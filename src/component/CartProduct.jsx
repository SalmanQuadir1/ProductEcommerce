
import React from 'react'
import { CiCircleRemove } from 'react-icons/ci';
import { useDispatch } from 'react-redux';
import { addCart, delCart, delProd } from '../redux/action';

const CartProduct = ({ arr, setTotalCartPrice }) => {
    var totalCartPrice = 0;
    const dispatch = useDispatch();
    return (
        <>
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
                        setTotalCartPrice(totalCartPrice);
                        return (



                            <tr>
                                <th scope="row" >
                                    <img src={`data:image/png;base64,${product.images[0].image}`} alt={product.title} height="100px" width="100px" />

                                </th>
                                <td className='align-middle font-weight-bold'><b>{product.productName}</b></td>
                                <td className='align-middle font-weight-bold'> <b>&#8377;{product.price}</b></td>
                                <td className='align-middle text-center'>

                                    <div className="input-group  ">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text p-3 rounded-0" onClick={() => dispatch(delCart(product))}> <i className="fa fa-minus" ></i></span>
                                        </div>
                                        <input style={{ width: '4rem' }} type="text" className="text-center border  border-default" value={product.qty} />
                                        <div className="input-group-append">
                                            <span className="input-group-text p-3 rounded-0" onClick={() => dispatch(addCart(product))}><i className="fa fa-plus"></i></span>
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
        </>
    )
}

export default CartProduct