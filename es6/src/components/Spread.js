import React from 'react';

const Spread = (props) => {
  const items = ['Apple', 'Banana', ...props.extraItems]; // Using spread operator

  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map((item) => <li >{item}</li>)}
      </ul>
    </div>
  );
};

export default Spread;
