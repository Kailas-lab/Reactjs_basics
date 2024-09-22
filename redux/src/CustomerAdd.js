import React, { useState } from 'react';
import CustomerView from './CustomerView';
import { addCustomer as addCustomerAction } from './slices/customerSlice';
import { useDispatch } from 'react-redux';

function CustomerAdd() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch(); // Get the dispatch function

  function addCustomer() {
    if (input) {
      dispatch(addCustomerAction(input)); // Dispatch the action correctly
      setInput(""); // Clear input after adding customer
    }
  }

  return (
    <>
      <div>
        <h3>Add new customer</h3>
        <input 
          type="text" 
          value={input} // Bind the input value to the state
          onChange={(e) => setInput(e.target.value)} 
        />
        <button onClick={addCustomer}>Add</button>
      </div>
      {/* <CustomerView customers={customers} /> */}
    </>
  );
}

export default CustomerAdd;
