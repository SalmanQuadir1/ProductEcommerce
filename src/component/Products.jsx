import { Divider, Rating, Skeleton, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProductService from "../service/productService";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import axios from "axios";
import { addCart } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import './styles/Products.css';
import { MdOutlineTableView } from 'react-icons/md';


const Products = () => {

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;
  const dispatch = useDispatch();




  useEffect(() => {

    axios.get("http://localhost:8089/product/allProducts"

    )
      .then((response) => {
        if (componentMounted) {
          setData(response.data);
          setFilter(response.data);
          setLoading(false);
        }
        return () => {
          componentMounted = false;

        }
      });
  }, []);



  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton count={3} />
          <Skeleton width={200} />
          <Skeleton width={150} />


        </div>
        <div className="col-md-3">
          <Skeleton count={3} />
          <Skeleton width={200} />
          <Skeleton width={150} />

        </div>
        <div className="col-md-3">
          <Skeleton count={3} />
          <Skeleton width={200} />
          <Skeleton width={150} />


        </div>
        <div className="col-md-3">
          <Skeleton count={3} />
          <Skeleton width={200} />
          <Skeleton width={150} />


        </div>
      </>
    );
  };
  const filterProduct = (categ) => {
    const updatedList = data.filter((x) => x.category === categ);
    setFilter(updatedList);

  }



  const ShowProducts = () => {
    return (
      <>
        <div className="buttons text-center" >

          <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewellery</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronics</button>



        </div>
        {filter.map((product) => {
          console.log("............", filter);
          console.log(product);
          return (

            <>
              <div className="col-md-3 mb-4 mt-4 border-0" key={product.id} >
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">

                      <div className="card h-100   shadow-lg border-0  text-center  " >

                        <img src={`data:image/png;base64,${product.images[0].image} `}
                          className="card-img-top imgMain border-0" alt={product.name} height="270px" />

                      </div>
                    </div>
                    <div class="flip-card-back">

                      <div className="card-body mt-5 mb-1">
                        <h5 className="card-title mb-0 text-uppercase">{product.productName}</h5>
                        <b><p className="card-text">&#8377;{product.price}</p></b>

                        <div className="d-flex bg-success rounded-circle status"></div>
                        <p className="card-title mb-0">{product.status}</p>


                        <p className="card-text">
                          <Rating name="read-only" precision={0.5} defaultValue={5} readOnly />
                        </p>
                        <Link className="btn btn-warning mx-1" to={`/product/${product.id}`}><MdOutlineTableView  size={20}/>View Prod
                        </Link>
                        <Link onClick={() => { dispatch(addCart(product)); }} className="btn btn-danger "><AddShoppingCartIcon /> Add To Cart</Link>
                      </div>


                    </div>
                  </div>
                </div>
              </div>


            </>
          )
        })
        }
      </>
    )
  }
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <Typography
              variant="h4"
              noWrap

              href="/"
              sx={{
                mx: 4,
                display: { xs: '', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 800,
                letterSpacing: '.9rem',
                color: 'inherit',
                textDecoration: 'none',

              }}
            >
              LATEST PRODUCTS
            </Typography>
            <Divider variant="middle" />


          </div>
        </div>
        <div className="row justify-content-center border-0">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
