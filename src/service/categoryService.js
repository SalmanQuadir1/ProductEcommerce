import axios from 'axios';
import React from 'react'

const  url="http://localhost:8087/category";

class CategoryService extends React.Component { 

    saveProduct(category){
        
        return axios.post(url+"/saveCategory",category);


    }
}
export default CategoryService;