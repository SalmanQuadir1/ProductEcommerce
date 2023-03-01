import { toast } from "react-toastify";

export const addCart = (product) => {
    toast.success("Product Added To Cart", {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    return {
        type: "ADDITEM",
        payload: product
    }


}
export const delCart = (product) => {
   
    return {
        type: "DELITEM",
        payload: product
    }

}
export const delProd = (product) => {
    toast.success("Product Removed from Cart", {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    return {
        type: "DELPROD",
        payload: product
    }
}