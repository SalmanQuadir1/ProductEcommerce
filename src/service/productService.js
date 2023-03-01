
import axios from 'axios';
import { useEffect } from 'react';


const  url="http://localhost:8089/product";
 const headers = new Headers();
 class ProductService {

    
    saveProduct(product){
        
        return axios.post(url+"/updateProduct",product);


      
        
    }
    getAllProduct(){
        return axios.get(url+"/");

    }
    getProductById(id){
        return axios.get(url+"/"+id);

    }
    deleteProduct(id){
        return axios.get(url+"/deleteProduct"+id);

    }
    editProduct(product){
        return axios.post(url+"/editProduct",product);

    }

}
export default new ProductService;


