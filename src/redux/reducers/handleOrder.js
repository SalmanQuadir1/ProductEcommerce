const ORDER = [];

const handleOrder = (state = ORDER, action) => {
    console.log("orderHandlers...", action.payload);

    const Order = action.payload;
    switch (action.type) {
        case "ADDORDER":
            const exist = state.find((x) => x.id === Order.id);


            const ORDER = action.payload;
            return [
                ...state,
                {
                    ...ORDER


                }
            ]
        default:
            return state;
    }




}


export default handleOrder;