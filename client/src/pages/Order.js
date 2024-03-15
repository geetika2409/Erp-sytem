import React from 'react';
import Sidebar from './shared/Sidebar'; // Importing the Sidebar component
import OrderData from "../components/Order_data"; // Importing the OrderData component
import "./Order.css"; // Importing styles for the Order component

const Order = () => {
  return (
    // Main order layout
    <div className='main-order flex flex-row gap-10 bg-slate-100'>
      {/* Sidebar component */}
      <Sidebar className="main-sidebar" />

      {/* Main content area */}
      <div className=''>
        {/* Order data component */}
        <OrderData />
      </div>
    </div>
  )
}

export default Order;