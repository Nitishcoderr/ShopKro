import './App.css'
import ProductList from './component/ProductList'
import db from './component/database'


function App() {

  return (
<>
<ProductList products={db.products}/>
</>
  )
}

export default App
