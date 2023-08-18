import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Cart from './Cart'
import { useEffect } from 'react'
import { CHANGED_QUANTITY, CHANGE_ORDER_CART } from '../action'

const CartPage = () => {
    const dispatch = useDispatch()
  const cartItems = useSelector(state=>state.cart.items)
  const order = useSelector(state=>state.order)


  const changeQuantity = (quantity,item)=>{
    dispatch({type:CHANGED_QUANTITY,payload:{...item,quantity:quantity}})
  }

  useEffect(() => {
    dispatch({type:CHANGE_ORDER_CART,payload:cartItems})
  }, [cartItems])
  
  return (
    <>
     <Navbar cartCount={cartItems.length} /> 
     <Cart items={cartItems} order={order} changeQuantity={changeQuantity} />
     <Footer/>
    </>
  )
}

export default CartPage
