import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import {  } from '../action'
import Checkout from '../component/Checkout'



const CheckoutPage = () => {

    const dispatch = useDispatch()
    const cartItems = useSelector(state=>state.cart.items)
    const order = useSelector(state=>state.order)
    const user = useSelector(state=>state.user)

// function for Adding address
const addAddress=()=>{
// 
}
  

  return (
    <>
    <Navbar cartCount={cartItems.length} /> 
     <Checkout order={order} user={user} addAddress={addAddress}/>
     <Footer/> 
    </>
  )
}

export default CheckoutPage