import React, { useState, useEffect } from 'react';

function Logger() {
  const [count, setCount] = useState(0);

  // Step 3: Use `useEffect` to perform a side effect
  useEffect(() => {
    console.log(`Count changed to ${count}`);
  }, [count]);
  
  

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Logger;
