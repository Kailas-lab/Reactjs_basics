// File: src/UserGreeting.js
import React from 'react';

function Ternary({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in</h1>}
    </div>
  );
}

export default Ternary;
