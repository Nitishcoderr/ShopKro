import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Cart from '../component/Cart'
import { useEffect } from 'react'
import { CHANGED_QUANTITY, CHANGE_ORDER_CART, REMOVE_ITEM } from '../action'

const CartPage = () => {
    const dispatch = useDispatch()
  const cartItems = useSelector(state=>state.cart.items)
  const order = useSelector(state=>state.order)


  const changeQuantity = (quantity,item)=>{
    dispatch({type:CHANGED_QUANTITY,payload:{...item,quantity:quantity}})
  }

  const removeItem=(item)=>{
    dispatch({type:REMOVE_ITEM,payload:item})
  }

  useEffect(() => {
    dispatch({type:CHANGE_ORDER_CART,payload:cartItems})
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
