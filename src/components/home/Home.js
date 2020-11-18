import React from 'react'
import Card from '../card/Card'
import './Home.css'
import { connect } from 'react-redux';

 const Home = (props) => {
    return (

        <div className="main_container">

            <div className="product_container">
                {props.products.map(product => <Card product={product} />)}
            </div>


        </div>

    )
}
const mapStateToProps = (state) => {
    return {
      products: state.products.products
    }
  }
  export default connect(mapStateToProps)(Home);
  
