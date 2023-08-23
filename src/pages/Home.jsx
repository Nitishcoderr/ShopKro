import { useDispatch, useSelector } from 'react-redux'
import ProductList from '../component/ProductList'
import Navbar from '../component/Navbar'
import Crousel from '../component/Crousel'
import Footer from '../component/Footer'
import { addToCartAC } from '../action'
ProductList


const Home = () => {

  const dispatch = useDispatch()
  const products = useSelector(state=>state.product.products)
  const cartItems = useSelector(state=>state.cart.items)

  const addToCart = (product)=>{
    dispatch(addToCartAC(product))
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
