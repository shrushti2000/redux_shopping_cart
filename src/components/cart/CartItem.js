import React from 'react'
import { removeFromCart } from '../../redux/cart/cartAction'
import './CartItem.css';
import {connect} from 'react-redux'
 const CartItem = (props) => {
     console.log(props)
    return (
        <div className="container_cart">
            
            <img className="mini_img" src={props.item.image}/>
            <div className="content">
                <h4>{props.item.title}</h4>
                <h4>Quantity :{props.item.quantity}</h4>
                 <h4>Price : ₹ {props.item.price}</h4>
                 
            </div>
            <i class="fa fa-times" aria-hidden="true" onClick={()=>props.removeFromCart(props.item._id)}></i>
        </div>
    )
}

const mapDispatchToProps=(dispatch)=>({
    removeFromCart:item=>dispatch(removeFromCart(item))
})
export default connect(null,mapDispatchToProps)(CartItem);


