// File: src/App.js
import React from 'react';
import { add, subtract } from './components/Modules';
import Map from './components/Map';
import Spread from './components/Spread';
import Props from './components/Destruct';
import Destruct from './components/Destruct';
import For from './components/For';
 // Import the functions


// function App() {
//   const sum = add(5, 3);
//   const difference = subtract(5, 3);

//   return (
//     <div>
//       <p>Sum: {sum}</p>
//       <p>Difference: {difference}</p>
//     </div>
//   );
// }

// export default App;





// import Ternary from './components/Ternary';

//ternary example
// function App() {
//   return (
//     <div>
//       <Ternary isLoggedIn={true} />
//       <Ternary isLoggedIn={false} />
//     </div>
//   );
// }

// export default App;


//spread operator example
// function App() {
//   const extraItems = ['Orange', 'Grapes']; // Extra items to be passed as props
//   return (
//     <div>
//        <Spread extraItems={extraItems} />
//     </div>
//   )
// }

// export default App



//Destructing example
// function App() {
//   const user = { name: 'Alice', age: 25 }; // User object

//   return (
//     <div>
//       <Destruct {...user} /> {/* Spread operator to pass props */}
//     </div>
//   );
// }

// export default App;




function App() {
  return (
    <div >
      <For />
      {/* <FruitListClass /> */}
    </div>
  );
}

export default App;



