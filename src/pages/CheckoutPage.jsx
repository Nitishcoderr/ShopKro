import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { EMPTY_CART, PLACE_ORDER, SET_SHIP_ADDRESS, addAddressAC, emptyCartAC, placeOrderAC, setShipAddressAC } from '../action'
import Checkout from '../component/Checkout'



const CheckoutPage = () => {

    const dispatch = useDispatch()
    const cartItems = useSelector(state=>state.cart.items)
    const order = useSelector(state=>state.order)
    const user = useSelector(state=>state.user)

// function for Adding address
const addAddress=(address)=>{
 dispatch(addAddressAC(address))
}
  
const setShipAddress=(address)=>{
 dispatch(setShipAddressAC(address))
}
const placeorder=()=>{
  if(order.shipping_address){
    dispatch(placeOrderAC(order))
    dispatch(emptyCartAC())
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