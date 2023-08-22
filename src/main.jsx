import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { OrderReducer, cartReducer, productReducer, userReducer } from './Reducer/reducer.js'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import CartPage from './component/CartPage.jsx'
import CheckoutPage from './pages/CheckoutPage.jsx'

const store= configureStore(
  {
    reducer:{
      product:productReducer,
      cart:cartReducer,
      order:OrderReducer,
      user:userReducer
    }
  }
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <Routes>
        <Route exact path='/' element={<App/>} />
        <Route index element={<Home/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/checkout' element={<CheckoutPage/>}/>
      </Routes>
    </Router>
    </Provider>
  </React.StrictMode>,
)
