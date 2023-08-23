import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Cart from '../component/Cart'
import { useEffect } from 'react'
import {REMOVE_ITEM, changeOrderWithCart, changeQuantityAC, removeItemAC} from '../action'

const CartPage = () => {
    const dispatch = useDispatch()
  const cartItems = useSelector(state=>state.cart.items)
  const order = useSelector(state=>state.order)


  const changeQuantity = (quantity,item)=>{
    dispatch(changeQuantityAC({...item,quantity:quantity})) 
  }

  const removeItem=(item)=>{
    dispatch(removeItemAC(item))
  }

  useEffect(() => {
    dispatch(changeOrderWithCart(cartItems))
  }, [cartItems])
  
  return (
    <>
     <Navbar cartCount={cartItems.length} /> 
     <Cart items={cartItems} order={order} changeQuantity={changeQuantity} removeItem={removeItem} />
     <Footer/>
    </>
  )
}

export default CartPage