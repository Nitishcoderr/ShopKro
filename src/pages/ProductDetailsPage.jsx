import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import ProductDetails from '../component/ProductDetails'
import { useParams } from 'react-router-dom'
import { addToCartAC } from '../action'


const ProductDetailsPage = () => {
    const dispatch = useDispatch()
    let {productId} = useParams()
    const cartItems = useSelector(state=>state.cart.items) 
    const products = useSelector(state=>state.product.products)
    const product = products.find(p=>p._id==productId)

    const addToCart = (product)=>{
      dispatch(addToCartAC(product))
    }

  
  return (
    <>
      <Navbar cartCount={cartItems.length} /> 
        <ProductDetails product={product} addToCart={addToCart} />
     <Footer/>  
    </>
  )
}

export default ProductDetailsPage
