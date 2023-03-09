import React, { useState, useEffect } from 'react'
import '../component/styles/Producitem.css';
import { useParams } from 'react-router-dom';
import { Rating, Skeleton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, delCart } from '../redux/action';
import axios from 'axios';

const baseUrl = 'http://localhost:8089';
const Product = () => {

    const { id } = useParams();
    const [image, setImage] = useState([]);
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const [index, setIndex] = useState(0);
    const [count, setCount] = useState(1);

    const CartItems = useSelector((state) => state.handleCart);
    const dispatch = useDispatch();
   




    const handleButtonMinus = () => {
        console.log('listening for minus');
        dispatch(delCart(product));
        setCount((c) => c - 1

        )



    }
    const handleButtonPlus = () => {
        console.log('listening for Add');
        dispatch(addCart(product));
        setCount((c) => c + 1

        )


    }
    const changeImage = (ind) => {
        console.log('listening for', index);
        setIndex(ind)


    }

    useEffect(() => {

        setLoading(true);
        axios.get(`${baseUrl}/product/findProduct/${id}`)
            .then((response) => {
                setProduct(response.data);
                setLoading(false);
            })
    }, []);
    useEffect(() => {
        axios.get(`${baseUrl}/images/${id}/image`)
            .then((response) => {
                setImage(response.data);

            })
    }, []);


    const Loading = () => {
        return (
            <>
                <div className="col-md-6 mt-5">
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />


                </div>
                <div className="col-md-6 mt-5">
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />

                </div>

            </>
        );
    };

    const ShowProduct = () => {
        console.log('Show Product', product);


        return (


            <>
                <div className="container m-5 pr " >
                    <div className="row">
                        <div className="col-md-6">
                            <div class="row">
                                <div class="col-md-2 mini-preview">
                                    {image.map(function (img, index) {
                                        return <img class="img-fluid details-img mb-1 border border-dark" onClick={() => changeImage(index)} src={`data:image/png;base64,${img}`} alt={index} />

                                    })}
                                    {/* <img class="img-fluid details-img mb-1" src={`http://localhost:8087/product/getimage/${product.images[0].name}`}/>
                                    <img class="img-fluid details-img mb-1" src={`http://localhost:8087/product/getimage/${product.images[0].name}`}/>
                                    <img class="img-fluid details-img mb-1" src={`http://localhost:8087/product/getimage/${product.images[0].name}`}/>  */}


                                </div>
                                <div class="col-md-10">
                                    <div class="product-image">
                                        <img class="img-fluid details-img" alt="imageSrc" src={`data:image/png;base64,${image[index]}`} height={500} />
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 card p-3 shadow-lg border-0">
                            <div class="category"><span class="theme-text">Category:</span> {product.category}</div>
                            <h2 class="title">{product.productName}</h2>
                            <hr />
                            <div class="ratings my-2">
                                <div class="stars d-flex">
                                    <div class="theme-text mr-2 "><b>Product Ratings:</b></div>
                                    <Rating name="read-only" precision={0.5} value={parseInt(product.rating)} readOnly />

                                </div>
                            </div>
                            <div class="price my-2  "><b>Price:  &#8377;{product.price} </b><strike class="original-price text-danger">&#8377;{product.price + 1000}</strike></div>

                            <div class="theme-text subtitle"><b>Brief Description:</b></div>
                            <div class="brief-description">
                                {product.description}
                            </div>

                            <div>
                                <div class="subtitle my-3 theme-text"><b>Colors:</b></div>
                                <div class="select-colors d-flex">
                                    <div class="color red"></div>
                                    <div class="color silver"></div>
                                    <div class="color black"></div>
                                </div>
                            </div>
                            <b>Quantity:</b><div class="input-group mb-3" style={{ width: '10rem' }}>
                                <div class="input-group-prepend">
                                    <span class="input-group-text p-3 rounded-0" onClick={handleButtonMinus}> <i className="fa fa-minus" ></i></span>
                                </div>
                                <input style={{ width: '0.1rem' }} type="text" class="form-control text-center" value={count} />
                                <div class="input-group-append">
                                    <span class="input-group-text p-3 rounded-0" onClick={handleButtonPlus}><i className="fa fa-plus"></i></span>
                                </div>
                            </div>
                            <hr />
                            <div class="row">
                                <div class="col-md-6"><button class="btn btn-danger  addBtn btn-block" onClick={() => dispatch(addCart(product))} title="Add to Cart"><AddShoppingCartIcon /> Add TO Cart</button></div>
                            </div>

                        </div>
                    </div>
                </div>


            </>



        )



    }
    return (
        <div>
            <div className="container pr">
                <div className="row">
                    {loading ? <Loading /> : <ShowProduct key={product.id} />}
                </div>

            </div>
        </div>
    )
}

export default Product;