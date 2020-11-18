import React from 'react'
import {connect} from 'react-redux';
import CartItem from './CartItem';
import './Cart.css'
 const Cart = (props) => {
     
    return (
        <div className="cart_page">
         <div className="page_container">
            {props.cartItems.map(item=><CartItem item={item}/>)}
        </div>
        <div className="checkout_box">
            <h1>SUMMARY</h1>
            <h4>Total Amount : ₹ {props.data} </h4>
            <h4>Shipping Charges : FREE</h4>
            <h4>Applicable Tax And Charges: ₹ 63 </h4>
            {props.cartItems.length === 0 ?   <h4> Amount Payable : ₹ 0 </h4>:
            <h4> Amount Payable : ₹ {props.data + 63 } </h4>}
            <button>Buy Now</button>
        </div>
        </div>
    )
}

const mapStateToProps=(state)=>({
    cartItems:state.cart.cartItems,
    data:state.cart.total
})
export default connect(mapStateToProps)(Cart);