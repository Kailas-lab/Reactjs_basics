import React, { useRef, useState } from 'react';

const Useref = () => {
  const countRef = useRef(0);
  const [count, setCount] = useState(0);

  const increment = () => {
    countRef.current += 1; // Updates the ref value
    setCount(countRef.current); // Updates the state to trigger re-render
    console.log(countRef.current);
  };

  return (
    <div>
      <p>Count: {count}</p> {/* This will now update on the webpage */}
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Useref;
