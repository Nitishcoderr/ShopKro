import { useDispatch, useSelector } from 'react-redux'
import ProductList from '../component/ProductList'
import Navbar from '../component/Navbar'
import Crousel from '../component/Crousel'
import Footer from '../component/Footer'
import { ADD_TO_CART } from '../action'
ProductList


const Home = () => {

    const dispatch = useDispatch()
  const products = useSelector(state=>state.product.products)
  const cartItems = useSelector(state=>state.cart.items)
  const addToCart = (product)=>{
    dispatch({type:ADD_TO_CART,payload:product})
  }


  return (
    <>
    <Navbar cartCount={cartItems.length}/>
    <Crousel/>
    <ProductList products={products} addToCart={addToCart} />
    <Footer/>

</>
  )
}

export default Home
