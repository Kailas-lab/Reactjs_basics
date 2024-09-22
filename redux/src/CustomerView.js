import React from 'react';
import { useSelector } from 'react-redux';

{/* function CustomerView({ customers }) */}
 function CustomerView(){
  const customers=useSelector((state)=> state.customers)
  return (
    <div>
      <h3>Customer List</h3>
      <ul style={{ listStyle: 'none' }}>
        {
          customers.map((customer) => (
            <li>{customer}</li>
          ))
        }
        <li></li>
      </ul> 
    </div>
  );
}

export default CustomerView;
