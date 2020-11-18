import React from 'react'
import {connect} from 'react-redux';
import { addToCart } from '../../redux/cart/cartAction';
import './card.css';
 const Card = (props) => {
     const {_id,image,title,price}=props.product
    return (
        <div className="card_container">
          <img src={image}></img>
          <h6 className="title">{title}</h6>
          <h5 className="price">$ {price}</h5>
          
          <button onClick={()=>props.addToCart(_id)}>Add to Cart</button>
        </div>
    )
}
const mapDispatchToProps=dispatch=>({
  addToCart:item=>dispatch(addToCart((item)))
})
export default connect(null,mapDispatchToProps)(Card);
