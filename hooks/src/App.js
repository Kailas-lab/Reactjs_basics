
/*

import React, { useState } from 'react';

const App = () => {
  // Initialize state
  const [count, setCount] = useState(0);

  const [name,setName] = useState("");

  
  

  // Handler for button click
  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      {/* for useState*/
      {/* <h1>Counter: {count}</h1> */}

      
      {/* for useState use input
      <input type="text" onChange={e => setName(e.target.value)} />
      <h1>{name} and count is {count}</h1>
      <button onClick={increaseCount}>Increase</button> 
    </div>
  );
};

export default App;
*/}



// Ensure all imports are at the top of the file
import Useref from "./hooks/Useref"; // Correct placement of import

const App = () => {
  return (
    <div>
      <h1>Focus Input Example</h1>
      <Useref />
    </div>
  );
};

export default App;
