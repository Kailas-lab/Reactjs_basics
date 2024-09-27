//use useEffect hook
//import useEffect
//check title in console

//import React, { useState, useEffect } from "react";

//function Counter() {
//  const [count, setCount] = useState(0);

  // useEffect hook runs after every render
 // useEffect(() => {
    //document.title = `You clicked ${count} times`;
//  });

//  return (
  //  <>
//      <p>You clicked {count} times</p>
  //    <button onClick={() => setCount(count + 1)}>
      //  Click me
  //    </button>
 //   </>
 // );
//}

//export default Counter;


import React, { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Alice");

  useEffect(() => {
    console.log(`Count is ${count}, Name is ${name}`);
  }, [count, name]); // Run useEffect when either `count` or `name` changes

  return (
    <>
      <p>Count: {count}</p>
      <p>Name: {name}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>
      <button onClick={() => setName(name === "Alice" ? "Bob" : "Alice")}>
        Change Name
      </button>
    </>
  );
}

export default Example;

