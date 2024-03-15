import React from 'react';
import { IoPieChart, IoPeople } from 'react-icons/io5'; // Importing icons
import { MdProductionQuantityLimits, MdBorderColor } from "react-icons/md";
import "./DashboardStats.css"; // Importing styles


export default function DashboardStatsGrid() {
    return (
        // Main container for the dashboard stats grid
        <div className="main-container flex gap-10">
            {/* Box for Expenses */}
            <BoxWrapper>
                {/* Icon for Expenses */}
                <div className="rounded-full h-14 w-14 flex items-center justify-center bg-red-700">
                    <IoPieChart className="text-3xl text-white" />
                </div>
                <div className="pl-4">
                    {/* Title and value for Expenses */}
                    <span className="text-lg text-gray-500 font-light">Expenses</span>
                    <div className="flex items-center">
                        <strong className="text-2xl text-gray-700 font-semibold">$3423</strong>
                        <span className="text-lg text-green-500 pl-2">+343</span>
                    </div>
                </div>
            </BoxWrapper>

            {/* Box for Products */}
            <BoxWrapper>
                {/* Icon for Products */}
                <div className="rounded-full h-14 w-14 flex items-center justify-center bg-green-700">
                    <MdProductionQuantityLimits className="text-3xl text-white" />
                </div>
                <div className="pl-4">
                    {/* Title and value for Products */}
                    <span className="text-lg text-gray-500 font-light">Products</span>
                    <div className="flex items-center">
                        <strong className="text-2xl text-gray-700 font-semibold">5423</strong>
                        <span className="text-lg text-green-500 pl-2">+343</span>
                    </div>
                </div>
            </BoxWrapper>

            {/* Box for Orders */}
            <BoxWrapper>
                {/* Icon for Orders */}
                <div className="rounded-full h-14 w-14 flex items-center justify-center bg-yellow-600">
                    <MdBorderColor className="text-3xl text-white" />
                </div>
                <div className="pl-4">
                    {/* Title and value for Orders */}
                    <span className="text-lg text-gray-500 font-light">Orders</span>
                    <div className="flex items-center">
                        <strong className="text-2xl text-gray-700 font-semibold">16432</strong>
                        <span className="text-lg text-red-500 pl-2">-43</span>
                    </div>
                </div>
            </BoxWrapper>

            {/* Box for Customers */}
            <BoxWrapper>
                {/* Icon for Customers */}
                <div className="rounded-full h-14 w-14 flex items-center justify-center bg-indigo-900">
                    <IoPeople className="text-3xl text-white" />
                </div>
                <div className="pl-4">
                    {/* Title and value for Customers */}
                    <span className="text-lg text-gray-500 font-light">Customers</span>
                    <div className="flex items-center">
                        <strong className="text-2xl text-gray-700 font-semibold">12313</strong>
                        <span className="text-lg text-red-500 pl-2">-30</span>
                    </div>
                </div>
            </BoxWrapper>
        </div>
    )
}

// Wrapper component for each box in the dashboard stats grid
function BoxWrapper({ children }) {
    return <div className="bg-white rounded-lg shadow-sm shadow-slate-300 w-64 p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}