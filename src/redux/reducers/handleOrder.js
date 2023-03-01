const ORDER = [];

const handleOrder = (state = ORDER, action) => {
    const Order= action.payload;
    switch (action.type) {
        case "ADDORDER":
            const exist = state.find((x) => x.id === Order.id);

            if (exist) {
                return state.map((x) => x.id === Order.id ? { ...x, qty: x.qty + 1 } : x);
            } else {
                const ORDER= action.payload;
                return [
                    ...state,
                    {
                        ...ORDER,
                        qty: 1,

                    }
                ]
            }
            break;

       

        default:
            return state;
            break;

    }

}
export default handleOrder;