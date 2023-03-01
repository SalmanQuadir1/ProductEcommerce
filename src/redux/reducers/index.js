import handleCart from "./handleCart";
import handleOrder from "./handleOrder";
import {combineReducers} from 'redux';

const rootReducers = combineReducers({
    handleCart,
    handleOrder,

})
export default rootReducers;