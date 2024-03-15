import React, { useState } from 'react'
import { format } from 'date-fns'
import { getOrderStatus } from './Order_status'; // Importing the function to get order status
import { useNavigate } from "react-router-dom"; // Importing hook for navigation
import "./Order_data.css"

export default function RecentOrders() {

    const [recentOrderData, setRecentOrderData] = useState([
        {
            id: '1001',
            product_id: '#ABCDEFGHI123',
            customer_name: 'John Dane',
            order_date: '2022-05-17T03:24:00',
            current_order_status: 'PLACED',
        },
        {
            id: '1002',
            product_id: '#ABCDEFGHI456',
            customer_name: 'Aryaman Khanna',
            order_date: '2022-05-17T03:24:00',
            current_order_status: 'CONFIRMED',
        },
        {
            id: '1003',
            product_id: '#ABCDEFGHI123',
            customer_name: 'Disclona Dsouza',
            order_date: '2022-05-17T03:24:00',
            current_order_status: 'SHIPPED',
        },
        {
            id: '1004',
            product_id: '#ABCDEFGHI123',
            customer_name: 'Ayanana ivor',
            order_date: '2022-05-17T03:24:00',
            current_order_status: 'OUT_FOR_DELIVERY',
        },
        {
            id: '1005',
            product_id: '#ABCDEFGHI123',
            customer_name: 'Kristan Stewart',
            order_date: '2022-05-17T03:24:00',
            current_order_status: 'DELIVERED',
        },
        {
            id: '1006',
            product_id: '#ABCDEFGHI123',
            customer_name: 'Gaurav Kapoor',
            order_date: '2022-05-17T03:24:00',
            current_order_status: 'DEFAULT',
        },
        {
            id: '1007',
            product_id: '#ABCDEFGHI123',
            customer_name: 'Ashika Kapoor',
            order_date: '2022-05-17T03:24:00',
            current_order_status: 'DELIVERED',
        },
        {
            id: '1007',
            product_id: '#ABCDEFGHI123',
            customer_name: 'Imam Khan',
            order_date: '2022-05-17T03:24:00',
            current_order_status: 'DEFAULT',
        },
        {
            id: '1008',
            product_id: '#ABCDEFGHI123',
            customer_name: 'Aashna Khanna',
            order_date: '2022-05-17T03:24:00',
            current_order_status: 'SHIPPED',
        },
        {
            id: '1009',
            product_id: '#ABCDEFGHI123',
            customer_name: 'David Guetta',
            order_date: '2022-05-17T03:24:00',
            current_order_status: 'DELIVERED',
        }
    ]);
    
    const navigate = useNavigate(); // Initializing the navigate hook for routing

    // Function to handle submission of order details
    const submitHandler = (index) => {
        const newOrder = { // Creating new order object
            id: recentOrderData[index].id,
            product_id: recentOrderData[index].product_id,
            customer_name: recentOrderData[index].customer_name,
            order_date: recentOrderData[index].order_date,
            current_order_status: recentOrderData[index].current_order_status
        };

        // Navigating to order details page with new order data
        navigate("order_details", { state: { newOrder } });
    };

    return (
        <>
            {/* Main container */}
            <div className="flex justify-center items-center h-screen max-w-[100vw]">
                {/* Order information container */}
                <div className=" bg-gray-100">
                    {/* Title */}
                    <h1 class="order_heading text-3xl font-semibold text-dark-blue text-center mb-6">Your orders</h1>

                    {/* Table for desktop view */}
                    <div className=" rounded-lg hidden shadow md:block">
                        {/* Table structure */}
                        <table className="block border-collapse shadow-[0_10px_10px_#ccc] rounded-xl whitespace-nowrap h-[80vh] w-full ">
                            <thead class="bg-gray-50 border-b-2 border-gray-200">
                                {/* Table headers */}
                                <tr>
                                    <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">S.No.</th>
                                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Order_Id</th>
                                    <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Customer_Name</th>
                                    <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Date</th>
                                    <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">Status</th>
                                    <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left"></th>
                                </tr>
                            </thead>
                            <tbody class="divide-y">
                                {/* Rendering each order */}
                                {recentOrderData.map((order, index) => (
                                    <tr key={order.id} className=''>
                                        <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>#{order.id}</td>
                                        <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{order.product_id}</td>
                                        <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{order.customer_name}</td>
                                        <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{format(new Date(order.order_date), 'dd MMM yyyy')}</td>
                                        <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{getOrderStatus(order.current_order_status)}</td>
                                        <td className='p-3 text-sm text-gray-700 whitespace-nowrap'><button onClick={() => submitHandler(index)} className='bg-dark-blue p-1 text-white text-sm rounded-md hover:bg-light-blue'>View Details</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Cards for mobile view */}
                    <div class="grid grid-cols-2 sm:grid-cols-2 gap-4 gap-x-8 md:hidden mb-0">
                        
                        {recentOrderData.map((order, index) => (
                            <div key={order.id} className='order-card border border-slate-200 bg-white space-y-3 p-4 rounded-lg shadow'>
                                <div className='p-3 text-sm text-gray-700 whitespace-nowrap'>#{order.id}</div>
                                <div className='flex items-center space-x-2 text-sm'>{order.product_id}</div>
                                <div className='flex items-center space-x-2 text-sm'>{order.customer_name}</div>
                                <div className='flex items-center space-x-2 text-sm'>{format(new Date(order.order_date), 'dd MMM yyyy')}</div>
                                <div className='flex items-center space-x-2 text-sm'>{getOrderStatus(order.current_order_status)}</div>
                                <div className='flex items-center space-x-2 text-sm'><button onClick={() => submitHandler(index)} className='bg-indigo-900 p-1 text-white text-sm rounded-md hover:bg-indigo-700'>View Details</button></div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}