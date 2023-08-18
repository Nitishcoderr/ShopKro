import { useSelector } from 'react-redux'
import './App.css'
import ProductList from './component/ProductList'



function App() {
  const products = useSelector(state=>state.product.products)

  return (
<>
<ProductList products={products}/>
</>
  )
}

export default App
