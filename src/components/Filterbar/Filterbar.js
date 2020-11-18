import React from 'react'
import './Filterbar.css'
import {connect} from 'react-redux';
import { sortfilter, sort_size } from '../../redux/product/productAction';
class Filterbar extends React.Component {
    
    render(){
        return (
            <div className="filterbar">
                 
                    <div className="filter filter-sort">
                        Order {" "}
                        <select value={this.props.sort}  onChange={(event)=>this.props.sortfilter(event.target.value)} >
                            <option value="latest">Latest</option>
                            <option value="lowest">Lowest</option>
                            <option value="highest">Highest</option>
                        </select>
                    </div>
                    <div className="filter filter-size">
                        Filter{" "}
                        <select value={this.props.size} onChange={(event)=>this.props.sort_size(event.target.value)}>
                            <option value="">ALL</option>
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select>
                    </div>  
                </div>
            
        )
    }
   
}
const mapStateToProps = (state) =>{
    return {
      sort: state.products.sort,
      size:state.products.size
    }
  }

const mapDispatchToProps=(dispatch)=>({
    sortfilter:sort=>dispatch(sortfilter(sort)),
    sort_size:size=>dispatch(sort_size(size))

})

export default connect(mapStateToProps,mapDispatchToProps)(Filterbar);