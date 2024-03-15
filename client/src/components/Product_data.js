import React from 'react';
import "./Product_data.css"; // Importing CSS file for styling

// Component for displaying product data
const Product_data = () => {
    return (
        <div className="product-container w-[42rem] h-[24rem] bg-white p-4 rounded-lg border border-gray-200 shadow-slate-300 shadow-md flex flex-col items-center">
            {/* Title for the product data section */}
            <strong className="text-gray-700 text-2xl text-center font-medium">Products Info</strong>
            <div className='pt-10 flex flex-col gap-y-6'>
                {/* Main container for product data */}
                <div className='main-product-data flex flex-row gap-x-4'>
                    {/* Individual product data containers */}
                    {/* Electronics */}
                    <div className='bg-gray-800 p-4 rounded-md border w-full border-gray-200 shadow-slate-300 shadow-md flex flex-col items-center'>
                        <div className="pl-4">
                            <span className="text-lg text-slate-200 font-light">Electronics</span>
                            <div className="flex items-center">
                                <strong className="text-2xl text-white font-semibold">300</strong> {/* Product quantity */}
                            </div>
                        </div>
                    </div>
                    {/* Furniture */}
                    <div className='bg-cyan-600 p-4 rounded-md border w-full border-gray-200 shadow-slate-300 shadow-md flex flex-col items-center'>
                        <div className="pl-4">
                            <span className="text-lg text-slate-200 font-light">Furniture</span>
                            <div className="flex items-center">
                                <strong className="text-2xl text-white font-semibold">620</strong> {/* Product quantity */}
                            </div>
                        </div>
                    </div>
                    {/* Equipments */}
                    <div className='bg-indigo-500 p-4 rounded-md border w-full border-gray-200 shadow-slate-300 shadow-md flex flex-col items-center'>
                        <div className="pl-4">
                            <span className="text-lg text-slate-200 font-light">Equipments</span>
                            <div className="flex items-center">
                                <strong className="text-2xl text-white font-semibold">210</strong> {/* Product quantity */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Additional row of product data */}
                <div className='main-product-data flex flex-row gap-x-4'>
                    {/* Software */}
                    <div className='bg-violet-950 p-4 rounded-md border w-full border-gray-200 shadow-slate-300 shadow-md flex flex-col items-center'>
                        <div className="pl-4">
                            <span className="text-lg text-slate-200 font-light">Software</span>
                            <div className="flex items-center">
                                <strong className="text-2xl text-white font-semibold">700</strong> {/* Product quantity */}
                            </div>
                        </div>
                    </div>
                    {/* Tools */}
                    <div className='bg-fuchsia-900 p-4 rounded-md border w-full border-gray-200 shadow-slate-300 shadow-md flex flex-col items-center'>
                        <div className="pl-4">
                            <span className="text-lg text-slate-200 font-light">Tools</span>
                            <div className="flex items-center">
                                <strong className="text-2xl text-white font-semibold">310</strong> {/* Product quantity */}
                            </div>
                        </div>
                    </div>
                    {/* Expenses */}
                    <div className='bg-blue-800 p-4 rounded-md border w-full border-gray-200 shadow-slate-300 shadow-md flex flex-col items-center'>
                        <div className="pl-4">
                            <span className="text-lg text-slate-200 font-light">Expenses</span>
                            <div className="flex items-center">
                                <strong className="text-2xl text-white font-semibold">200</strong> {/* Product quantity */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product_data; // Exporting the component