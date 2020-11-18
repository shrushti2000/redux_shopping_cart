//const { default: data } = require("../products");
import CartItem from "../../components/cart/CartItem";
import data from "../../products";
const INITIAL_STATE={
    products:data.products,
    sort:"latest",
    size:""
}
const productReducer=(state=INITIAL_STATE,action)=>{
   switch(action.type){
       case 'SORT_FILTER':
        {
        let filterCartItem= state.products.slice().sort((a,b)=>(
        action.payload==="lowest" ? (a.price >b.price )?1:-1:
        action.payload==="highest"?(a.price < b.price)?1:-1:
        a._id < b._id?1:-1)
      )
      return{
          ...state,
          products:filterCartItem,
          sort:action.payload
      }
    }
    case 'SORT_SIZE':{
        if(action.payload===""){
            return{
                ...state,
                size:action.payload,
                products:state.products}
          }
        else{
           let filterproducts=state.products.filter((product)=>product.availableSizes.indexOf(action.payload)>=0)
            return{
                ...state,
                size:action.payload,
                products:filterproducts
                
            }
        }
    }
      default :return{
          ...state
      }
   }
}
export default productReducer;