import React from 'react';
import Table from '../components/Table'; // Importing the Table component
import Modal from '../components/Modal'; // Importing the Modal component
import Sidebar from "./shared/Sidebar"; // Importing the Sidebar component
import { useState } from 'react'; // Importing useState hook
import "./Product.css"; // Importing styles for the Product component

const Products = () => {
  // State for managing modal open/close
  const [modalOpen, setModalOpen] = useState(false);

  // State for managing items data
  const [Items, setItems] = useState([
     // Initial items data
    {
      prod_id: 1,
      prod_name: "Widget X1",
      category: "Electronics",
      price: "$29.92",
      stock_quantity: 100,
    },
    {
      prod_id: 2,
      prod_name: "Office Chair Deluxe",
      category: "Furniture",
      price: "$129.92",
      stock_quantity: 50,
    },
    {
      prod_id: 3,
      prod_name: "Server rack",
      category: "IT Equipment",
      price: "$499",
      stock_quantity: 200,
    },
    {
      prod_id: 4,
      prod_name: "Industrial Drill",
      category: "Tools",
      price: "$89.99",
      stock_quantity: 100,
    },
    {
      prod_id: 5,
      prod_name: "Laptop ProBook",
      category: "Electronics",
      price: "$899.92",
      stock_quantity: 30,
    },
    {
      prod_id: 6,
      prod_name: "Executive Desk",
      category: "Furniture",
      price: "$349.92",
      stock_quantity: 400,
    },
    {
      prod_id: 7,
      prod_name: "High Speed Scanner",
      category: "Office Equipment",
      price: "$199.92",
      stock_quantity: 15,
    },
    {
      prod_id: 8,
      prod_name: "Hammer Drill",
      category: "Tools",
      price: "$129.92",
      stock_quantity: 70,
    }, {
      prod_id: 9,
      prod_name: "Accounting Software Pro",
      category: "Software",
      price: "$499.92",
      stock_quantity: 25,
    },
    {
      prod_id: 10,
      prod_name: "Conference Table",
      category: "Furniture",
      price: "$59.92",
      stock_quantity: 100,
    },
    {
      prod_id: 11,
      prod_name: "Laser Printer",
      category: "Office Equipment",
      price: "$299.92",
      stock_quantity: 100,
    },
    {
      prod_id: 12,
      prod_name: "Power Drill",
      category: "Tools",
      price: "$566.92",
      stock_quantity: 100,
    },
    {
      prod_id: 13,
      prod_name: "Mesh Office Chair",
      category: "Furniture",
      price: "$129.92",
      stock_quantity: 45,
    },
    {
      prod_id: 14,
      prod_name: "Barcode Scanner",
      category: "Office Eqipment",
      price: "$149.92",
      stock_quantity: 22,
    },
    {
      prod_id: 15,
      prod_name: "Circular Saw",
      category: "Tools",
      price: "$159.92",
      stock_quantity: 20,
    },
  ]);

  // State for tracking the index of item being edited
  const [itemToEdit, setItemToEdit] = useState(null);

  // Function to handle deletion of an item
  const handleDeleteItem = (targetIndex) => {
    setItems(Items.filter((_, idx) => idx !== targetIndex));
  };

  // Function to handle editing of an item
  const handleEdit = (idx) => {
    setItemToEdit(idx);
    setModalOpen(true);
  }

  // Function to handle submission of form data from modal
  const handleSubmit = (newItem) => {
    itemToEdit === null
      ? setItems([...Items, newItem]) // Adding new item if no item is being edited
      : setItems(
        Items.map((currItem, idx) => {
          if (idx !== itemToEdit) return currItem;
          return newItem;
        })
      );
  }

  return (
    <div className='main-product flex flex-row gap-8 bg-slate-100'>
      {/* Sidebar component */}
      <Sidebar className="main-sidebar" />

      {/* Main content area */}
      <div className='flex flex-col w-screen'>
        <div className='product_button p-10 flex flex-row justify-between'>
          {/* Search input and button */}
          <div className='search_button inline-flex space-x-3'>
            <input name="pro_name" placeholder='Enter product name....' className='w-72 p-2 h-10 rounded-md border border-slate-800' />
            <button className='bg-dark-blue text-white text-xl p-1 w-24 rounded-md hover:bg-light-blue h-10' >Search</button>
          </div>

          {/* Add product button */}
          <div>
            <button
              className='add_product_button bg-dark-blue text-white text-xl p-1 w-52 rounded-md hover:bg-light-blue h-10'
              onClick={() => setModalOpen(true)}
            >
              Add Product
            </button>
          </div>
        </div>

        {/* Product data table */}
        <div className='flex flex-col items-center justify-center pb-8'>
          <Table props={Items} deleteItem={handleDeleteItem} editItem={handleEdit} modalOpenFunc={modalOpen} />
        </div>
      </div>

      {/* Modal for adding/editing product */}
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
          }}
          onSubmit={handleSubmit}
          defaultValue={itemToEdit !== null && Items[itemToEdit]}
        />
      )}
    </div>
  )
}

export default Products;