import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import CategoryService from '../../service/categoryService';

const categoryService =new CategoryService();
const AddCategory = () => {
    const [category, setCategory] = useState({
        name: "",
        description: "",
      });
    const handleChanges=(e)=>{
        const value = e.target.value;
        setCategory({ ...category, [e.target.name]: value });
    }

    const categoryRegister=(e)=>{
        console.log('register', category);
        e.preventDefault();
        categoryService
        .saveProduct(category)
        .then((result) => {
          console.log("Category saved", result);
          toast.success("Category saved successfully" + " " + result.status, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          
        })
        .catch((error) => {
          console.log(error);
          toast.error("Something went wrong!!" +" "+error.message, {
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
   

    }
  return (
    <>
         <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card my-4">
              <div className="card-header fs-3 text-center">Add Category</div>
              <div className="card-body">
                <form action="" onSubmit={(e) => categoryRegister(e)}>
                  <div className="mb-3">
                    <label htmlFor="">Enter Category </label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      onChange={(e) => handleChanges(e)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="">Enter Description</label>
                    <input
                      type="text"
                      className="form-control"
                      name="description"
                      onChange={(e) => handleChanges(e)}
                    />
                  </div>
                
                
                  <button className="btn btn-primary col-md-12">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddCategory;