import {combineReducers} from 'redux';
import productReducer from './product/productReducer';
import cartReducer from './cart/cartReducer';


export default  combineReducers({
    products:productReducer,
    cart:cartReducer

})