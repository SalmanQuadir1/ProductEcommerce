

export const addOrder = (order) => {
   
    console.log("totalllllllllllll......reci", order);
    return {
        type: "ADDORDER",
        payload: order
    }
}