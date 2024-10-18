//DOM Manipulation


import React, { useRef } from 'react';

const InputFocus = () => {
  const inputRef = useRef(null); // Create a ref

  const handleFocus = () => {
    console.log(inputRef.current.placeholder); // Focus the input element
  };

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Click the button to focus" />
      <button onClick={handleFocus}>Focus the input</button>
    </div>
  );
};

export default InputFocus;
