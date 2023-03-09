import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from '@mui/material/Button';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import axios from "axios";
import PreviewImage from "./PreviewImage";
import '../styles/Producitem.css';


const initialProduct = {
  productName: "",
  description: "",
  price: "",
  status: "",
  comments: "",
  reviews: "",
  rating: "",
  details: ""
}

const AddProduct = () => {
  const [files, setFiles] = useState([]);
  const [product, setProduct] = useState(initialProduct);
  const token = JSON.parse(localStorage.getItem('Login token'));
  console.log("token...",token);
  

  const handleChanges = (e) => {
    const value = e.target.value;

    setProduct({ ...product, [e.target.name]: value });
  };
  const handleFileChange = (event) => {
    setFiles(event.target.files);
    console.log(event.target.files);
    //document.getElementById('output').setAttribute('src', URL.createObjectURL(event.target.files[0]));

  };

  const ProductRegister = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("product", new Blob([JSON.stringify(product)], { type: 'application/json' }));
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }
    console.log('ProductRegister', product);
    axios
      .post("http://localhost:8089/product/updateProduct", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`,
        },
      })


      .then((result) => {


        console.log("Product saved", result);
        toast.success("Product saved successfully" + " " + result.status, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setProduct(initialProduct);

      })
      .catch((error) => {

        console.log(error);
        toast.error("Something went wrong!!" + " " + error.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });

  };


  return (
    <>
     
          <div className="container pr ">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <div className="card my-4">
                <h4 className="text-center bg-dark text-white p-2">Add Product</h4>

                  <div className="card-body">
                    <form action="" onSubmit={(e) => ProductRegister(e)} encType="multipart/form-data">
                      <div className="mb-3">
                        <input
                          type="file"
                          className="form-control "
                          id='productImage'
                          name="files"
                          multiple="true"
                          onChange={handleFileChange}
                        />
                      </div>

                    
                            <PreviewImage files={files} key={files.id}></PreviewImage>
                         

                      <div className="mb-3">
                        <label htmlFor="">Enter Product Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="productName"
                          value={product.productName}

                          onChange={(e) => handleChanges(e)}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="">Enter Description</label>
                        <input
                          type="text"
                          className="form-control"
                          name="description"
                          value={product.description}
                          onChange={(e) => handleChanges(e)}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="">Enter Comments</label>
                        <input
                          type="text"
                          className="form-control"
                          name="comments"
                          value={product.comments}

                          onChange={(e) => handleChanges(e)}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="">Enter Rating</label>
                        <input
                          type="text"
                          className="form-control"
                          name="rating"
                          value={product.rating}

                          onChange={(e) => handleChanges(e)}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="">Enter Price</label>
                        <input
                          type="number"
                          className="form-control"
                          name="price"
                          value={product.price}

                          onChange={(e) => handleChanges(e)}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="">Enter Status</label>
                        <input
                          type="text"
                          value={product.status}
                          className="form-control"
                          name="status"
                          onChange={(e) => handleChanges(e)}
                        />
                        <div className="mb-3">
                          <label htmlFor="">Enter Details</label>
                          <textarea rows="3" name='details' className="form-control" value={product.details}

                            onChange={(e) => handleChanges(e)}></textarea>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="">Enter Reviews</label>
                          <textarea rows="3" name='reviews' className="form-control" value={product.reviews}
                            onChange={(e) => handleChanges(e)}></textarea>

                        </div>
                      </div>

                      <Button variant="contained" className="col-md-12" color="success" type="submit">Submit</Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>


    </>
  );
};

export default AddProduct;
