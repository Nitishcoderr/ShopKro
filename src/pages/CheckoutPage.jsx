import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { ADD_ADDRESS, EMPTY_CART, PLACE_ORDER, SET_SHIP_ADDRESS } from '../action'
import Checkout from '../component/Checkout'



const CheckoutPage = () => {

    const dispatch = useDispatch()
    const cartItems = useSelector(state=>state.cart.items)
    const order = useSelector(state=>state.order)
    const user = useSelector(state=>state.user)

// function for Adding address
const addAddress=(address)=>{
 dispatch({type:ADD_ADDRESS,payload:address})
}
  
const setShipAddress=(address)=>{
 dispatch({type:SET_SHIP_ADDRESS,payload:address})
}
const placeorder=()=>{
  if(order.shipping_address){
    dispatch({type:PLACE_ORDER,payload:order})
    dispatch({type:EMPTY_CART})
  }else{
    alert('Choose a shipping address')
  }
}
  

  return (
    <>
    <Navbar cartCount={cartItems.length} /> 
     <Checkout order={order} user={user} addAddress={addAddress} setShipAddress={setShipAddress} placeorder={placeorder} />
     <Footer/> 
    </>
  )
}

export default CheckoutPage