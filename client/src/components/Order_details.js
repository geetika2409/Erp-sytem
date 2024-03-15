import React from 'react';
import { useLocation } from 'react-router-dom'; // Importing hook for accessing location
import Sidebar from '../pages/shared/Sidebar'; // Importing sidebar component
import order_image from "../images/order_detail.png"; // Importing image for order details
import "./Order_details.css"

const Order_details = ({ newOrder }) => {
  const location = useLocation(); // Accessing location hook
  const order = location.state?.newOrder; // Extracting order data from location state

  return (
    // Main container with sidebar and order details
    <div className='main-order flex flex-row bg-slate-100 h-screen'>
      <Sidebar className="main-sidebar" /> {/* Sidebar component */}

      {/* Order details container */}
      <div className='flex justify-center items-center flex-1'>
        {/* Card container for order details */}
        <div className="card-container bg-white shadow-lg rounded-lg overflow-hidden w-3/5">
          <div className="px-6 py-4">
            {/* Order header */}
            <h5 className="text-2xl text-center bg-slate-400 font-semibold text-white p-1 rounded-md mb-8">ORDER <span className='text-indigo-800 pl-3'>#{order.id}</span></h5>

            {/* Order information */}
            <div className='flex gap-3'>
              <div className='w-1/2'>
                {/* Product ID */}
                <p className="mt-4 text-gray-600 text-xl"><span className='text-sky-600 bg-sky-200 px-3 py-1 font-semibold rounded-md'>Product Id</span> : <span className='font-semibold'>{order.product_id} </span></p>

                {/* Customer Name */}
                <p className="mt-8 text-gray-600 text-xl"><span className='text-orange-600 bg-orange-200 px-3 py-1 font-semibold rounded-md'>Customer Name</span> : <span className='font-semibold'>{order.customer_name} </span></p>

                {/* Order Date */}
                <p className="mt-8 text-gray-600 text-xl"><span className='text-teal-600 bg-teal-200 px-3 py-1 font-semibold rounded-md'>Order Date</span> : <span className='font-semibold'>{order.order_date} </span></p>

                {/* Order Status */}
                <p className="mt-8 text-gray-600 text-xl"><span className='text-yellow-600 bg-yellow-200 px-3 py-1 font-semibold rounded-md'>Status</span> : <span className='font-semibold'>{order.current_order_status} </span></p>
              </div>
              {/* Image container */}
              <div className='w-1/2'>
                {/* Order Image */}
                <img className='h-full w-full shadow-md shadow-slate-400 rounded-md border border-slate-300' src={order_image} alt="order_image" />
              </div>
            </div>

            {/* Buttons for edit and delete */}
            <div className='flex flex-row pt-6 gap-2 items-center justify-center'>
              {/* Edit status button */}
              <button className=' p-1 px-6 font-semibold rounded-md text-lg bg-green-800 text-white hover:bg-green-600'>Edit Status</button>

              {/* Delete order button */}
              <button className=' p-1 px-6 font-semibold rounded-md text-lg bg-red-700 text-white hover:bg-red-600'>Delete Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order_details; // Exporting Order_details component