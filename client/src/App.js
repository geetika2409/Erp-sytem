import React from 'react'
import { Routes, Route} from "react-router-dom"
import Dashboard from './pages/Dashboard'
import Products from "./pages/Products"
import Orders from "./pages/Order"
import OrderDetails from './components/Order_details'

const App = () => {
  return (
    <Routes>
      {/* Route for the Dashboard page */}
      <Route path="/" element={<Dashboard />} />

      {/* Route for the Products page */}
      <Route path="products" element={<Products />} />

      {/* Route for the Orders page */}
      <Route path="orders" element={<Orders />} />

      {/* Route for the Order details page */}
      <Route path="orders/order_details" element={<OrderDetails />} />
    </Routes>
  )
}

export default App