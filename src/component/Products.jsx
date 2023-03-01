import { Divider, Rating, Skeleton, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProductService from "../service/productService";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import axios from "axios";
import { addCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";



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
        <div className="buttons text-center">

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

              <div className="col-md-3 mb-4 mt-4"  >
                <div className="card h-100  shadow-lg border-0  text-center p-1" >
                  <Link to={`/product/${product.id}`}>
                    <img src={`data:image/png;base64,${product.images[0].image} `}
                      className="card-img-top" alt={product.name} height="300px" />
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title mb-0">{product.productName}</h5>
                    <p className="card-text">&#8377;{product.price}</p>
                    <p className="card-text">
                      <Rating name="read-only" precision={0.5} defaultValue={5} readOnly />
                    </p>
                    <Link onClick={() => {
                      dispatch(addCart(product));
                    
                    }}
                      className="btn btn-danger"><AddShoppingCartIcon /> Add To Cart</Link>
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
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
