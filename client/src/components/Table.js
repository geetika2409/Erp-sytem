import React from 'react';
import { FaEdit } from "react-icons/fa"; // Importing edit icon
import { MdDelete } from "react-icons/md"; // Importing delete icon
import "./Table.css"; // Importing CSS file for styling

// Table component to display data
const Table = ({ props, deleteItem, editItem, modalOpenFunc }) => {

    return (
        <div>
            {/* Desktop view */}
            <div className='overflow-auto rounded-lg shadow hidden md:block'>
                <table className='block overflow-hidden table-auto border-collapse shadow-[0_10px_10px_#ccc] rounded-xl whitespace-nowrap m-auto overflow-x-hidden overflow-y-scroll h-[80vh]'>
                    <thead className={`bg-slate-300 text-xl text-dark-blue font-medium ${modalOpenFunc ? "hidden" : "sticky"} top-0 z-10`}>
                        {/* Table headers */}
                        <tr>
                            <th className='p-3'>Product_id</th>
                            <th className='p-3'>Product_name</th>
                            <th className='p-3'>Category</th>
                            <th className='p-3'>Price</th>
                            <th className='p-3'>Stock_quantity</th>
                            <th className='p-3'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Table body */}
                        {props.map((prod, idx) => {
                            return (
                                <tr key={idx} className='hover:bg-slate-200 cursor-pointer border-t-2 border-slate-300'>
                                    <td className='p-3'>{prod.prod_id}</td>
                                    <td className='p-3'>{prod.prod_name}</td>
                                    <td className='p-3'>{prod.category}</td>
                                    <td className='p-3'>{prod.price}</td>
                                    <td className='p-3'>{prod.stock_quantity}</td>
                                    <td className='p-3'>
                                        {/* Edit and delete icons */}
                                        <span className='flex justify-around'>
                                            <FaEdit className="text-green-700 text-2xl" onClick={() => editItem(idx)} /> {/* Edit icon */}
                                            <MdDelete className="text-red-600 text-2xl" onClick={() => deleteItem(idx)} /> {/* Delete icon */}
                                        </span>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {/* Mobile view */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
                {/* Rendering table rows for each product */}
                {props.map((prod, idx) => {
                    return (
                        <tr key={idx} className='hover:bg-slate-200 cursor-pointer border border-slate-200 bg-white space-y-3 p-4 rounded-lg shadow'>
                            <td className='p-3 text-2xl font-bold text-gray-700 whitespace-nowrap'>#{prod.prod_id}</td>
                            <td className='flex items-center space-x-2 text-xl font-semibold'>{prod.prod_name}</td>
                            <td className='flex items-center space-x-2 text-xl font-semibold'>{prod.category}</td>
                            <td className='flex items-center space-x-2 text-xl font-semibold'>{prod.price}</td>
                            <td className='flex items-center space-x-2 text-xl font-semibold'>{prod.stock_quantity}</td>
                            <td className='flex items-center space-x-2 text-xl font-semibold'>
                                {/* Edit and delete icons */}
                                <span className='flex justify-around'>
                                    <FaEdit className="text-green-700 text-2xl" onClick={() => editItem(idx)} /> {/* Edit icon */}
                                    <MdDelete className="text-red-600 text-2xl" onClick={() => deleteItem(idx)} /> {/* Delete icon */}
                                </span>
                            </td>
                        </tr>
                    );
                })}
            </div>
        </div>
    );
}

export default Table; // Exporting the component