import React from 'react';
import Sidebar from "../pages/shared/Sidebar"; // Importing the Sidebar component
import DashboardStats from "../components/DashboardStats"; // Importing the DashboardStats component
import ProductChart from '../components/Product_chart'; // Importing the ProductChart component
import ProductData from '../components/Product_data'; // Importing the ProductData component
import OrderChart from '../components/Order_chart'; // Importing the OrderChart component
import "./Dashboard.css" // Importing styles for the Dashboard component

const Dashboard = () => {
  return (
    <>
      {/* Main dashboard layout */}
      <div className='main-dashboard flex flex-row gap-x-14 pr-10'>
        {/* Sidebar component */}
        <Sidebar className="main-sidebar" />

        {/* Main content area */}
        <div className='flex flex-col pt-10'>
          {/* Dashboard statistics component */}
          <DashboardStats />

          {/* Product information section */}
          <div className='product-container flex flex-row gap-8 pt-10'>
            {/* Product chart component */}
            <ProductChart />

            {/* Product data component */}
            <ProductData />
          </div>

          {/* Order chart component */}
          <div className='pt-10 pb-10'>
            <OrderChart />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard;