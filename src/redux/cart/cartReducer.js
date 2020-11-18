//const { default: data } = require("../products");
import data from "../../products";
const INITIAL_STATE={
    items:data.products,
    cartItems:[],
    total:0
}
const cartReducer=(state=INITIAL_STATE,action)=>{
  switch(action.type){
      case 'ADD_TO_CART':
        let addedItem=state.items.find(item=>action.payload===item._id);
        let existed_item= state.cartItems.find(item=> action.payload === item._id)
        if(existed_item){
           addedItem.quantity=addedItem.quantity+1
        return{
            ...state,
             total: state.total + addedItem.price
              }
            }
        else{
            addedItem.quantity=1
            return{
                ...state,  
                cartItems: [...state.cartItems, addedItem],
                total: state.total + addedItem.price
                }
                localStorage.setItem('cartItems',JSON.stringify( state.cartItems));
            }
        case 'REMOVE_FROM_CART':
           let removedItem=state.items.find(item=>item._id===action.payload)
            let updatedCartItems=state.cartItems.filter(item=>item._id!==action.payload)
            return{
                ...state,
                cartItems:updatedCartItems,
                total:state.total-(removedItem.quantity * removedItem.price)
            }
            default:return {
          ...state
      }
  
}
}
export default cartReducer;