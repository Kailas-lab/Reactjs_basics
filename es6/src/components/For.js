import React from "react";

function For() {
  const fruits = ["Apple", "Banana", "Cherry"];
  const fruitItems = [];

  // Loop to populate the fruitItems array
  for (let i = 0; i < fruits.length; i++) {
    fruitItems.push(<li >{fruits[i]}</li>); // Added a key prop for each list item
  }

  return (
    <div>
      <h2>Fruit List</h2>
      <ul>
        {fruitItems}
      </ul>
    </div>
  );
}

export default For;
