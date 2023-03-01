import React, { useState } from "react";
import axios from "axios";
import { unstable_composeClasses } from "@mui/material";

function UpdateProduct() {
    const [product, setProduct] = useState({});
    const [files, setFiles] = useState([]);

    const handleProductChange = (event) => {
        setProduct({ ...product, [event.target.name]: event.target.value });
    };

    const handleFileChange = (event) => {
        setFiles(event.target.files);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("product", new Blob([JSON.stringify(product)], { type: 'application/json' }));
        for (let i = 0; i < files.length; i++) {
            formData.append("files", files[i]);
        }


        axios
            .post("http://localhost:8087/product/updateProduct", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => {
                console.log('File changed', formData);

                console.log(res);
            })
            .catch((error) => {
                console.log('File changed', formData);

                console.log(error);
            });
    };

    return (
        <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <input
                type="text"
                name="name"
                onChange={handleProductChange}
                placeholder="Product Name"
            />
            <input
                type="text"
                name="description"
                onChange={handleProductChange}
                placeholder="Product Description"
            />
            <input type="file" multiple onChange={handleFileChange} />
            <button type="submit">Update Product</button>
        </form>
    );
}

export default UpdateProduct;
