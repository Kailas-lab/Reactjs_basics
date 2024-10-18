import React, { useState } from 'react';

function Counter() {
  // Step 2: Initialize state
  const [count, setCount] = useState(0);

  // Step 4: Create functions to update state
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
