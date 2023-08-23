import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Order from '../component/Order'

const OrderPage = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector(state=>state.cart.items)
    const order = useSelector(state=>state.order)
    const user = useSelector(state=>state.user)
    
  return (
    <>
    <Navbar cartCount={cartItems.length} /> 
    <h2 className='text-center my-2'>My Orders</h2>
    {
        user.orders.map(order=><Order items={order.items} order={order} />
        )
    }
    <Footer/>
   </>
  )
}

export default OrderPage
