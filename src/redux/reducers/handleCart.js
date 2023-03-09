

const cart = [];


const handleCart = (state = cart, action) => {



    const product = action.payload;
    switch (action.type) {
        case "ADDITEM":
            const exist = state.find((x) => x.id === product.id);

            if (exist) {
                return state.map((x) => x.id === product.id ? { ...x, qty: x.qty + 1 } : x);
            } else {
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,

                    }
                ]
            }


        case "DELITEM":
            const exist1 = state.find((x) => x.id === product.id);
            console.log("delItem...", exist1);
            if (exist1.qty === 1) {
                return state.filter((x) => x.id !== exist1.id);


            } else {
                return state.map((x) => x.id === product.id ? { ...x, qty: x.qty - 1 } : x);
            }


        case "DELPROD":
            const exist2 = state.find((x) => x.id === product.id);
            console.log("delItem...", exist2);
            if (exist2) {
                return state.filter((x) => x.id !== exist2.id);
            }


        default:
        return state;



    }


}

export default handleCart;