import React, { useState } from 'react';
import "./Modal.css"; // Importing styles for the Modal component

const Modal = ({ closeModal, onSubmit, defaultvalue }) => {
    // State to manage form input values
    const [formState, setFormState] = useState(
        defaultvalue || {
            prod_id: "",
            prod_name: "",
            category: "electronics",
            price: "",
            stock_quantity: "",
        }
    );

    // Function to handle changes in form inputs
    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    // State to manage form validation errors
    const [errors, setErrors] = useState("");

    // Function to validate the form
    const validateForm = () => {
        if (
            formState.prod_name &&
            formState.category &&
            formState.price &&
            formState.stock_quantity &&
            formState.prod_id
        ) {
            setErrors("");
            return true;
        } else {
            // If any field is missing, set error message
            let errorFields = [];
            for (const [key, value] of Object.entries(formState)) {
                if (!value) {
                    errorFields.push(key);
                }
            }
            setErrors(errorFields.join(", "));
            return false;
        }
    }

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form before submitting
        if (!validateForm()) return;

        // Call onSubmit callback function with form data
        onSubmit(formState);

        // Close the modal after form submission
        closeModal();
    }

    return (
        // Modal container
        <div
            className="modal-container"
            onClick={(e) => {
                // Close modal when clicking outside of the form
                if (e.target.className === "modal-container") closeModal();
            }}
        >
            {/* Modal content */}
            <div className="rounded-md p-4 bg-white w-96">
                <form>
                    {/* Input fields for product details */}
                    <div className="form-group">
                        <label htmlFor="prod_id">Product ID</label>
                        <input
                            name="prod_id"
                            value={formState.prod_id}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="prod_name">Product Name</label>
                        <input
                            name="prod_name"
                            value={formState.prod_name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        {/* Dropdown for selecting category */}
                        <select
                            name="category"
                            value={formState.category}
                            onChange={handleChange}
                        >
                            <option value="Electronics">Electronics</option>
                            <option value="Furniture">Furniture</option>
                            <option value="IT_Equipment">IT Equipment</option>
                            <option value="Office_Equipment">Office Equipment</option>
                            <option value="Software">Software</option>
                            <option value="Tools">Tools</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input
                            name="price"
                            value={formState.price}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="stock_quantity">Stock Quantity</label>
                        <input
                            name="stock_quantity"
                            value={formState.stock_quantity}
                            onChange={handleChange}
                        />
                    </div>
                    {/* Display validation errors, if any */}
                    {errors && <div className="error">{`Please include: ${errors}`}</div>}
                    {/* Submit button */}
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="bg-dark-blue text-white text-xl w-28 rounded-md hover:bg-blue-900 h-8 block m-auto cursor-pointer"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Modal;