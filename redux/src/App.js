// src/App.js
import './App.css';
import CustomerAdd from './CustomerAdd'; // Make sure this path is correct
import CustomerView from './CustomerView'; // Make sure this path is correct
import { Provider } from 'react-redux';
import { store } from './store'; // Import the Redux store

function App() {
  return (
    <Provider store={store}> {/* Wrap your app with Redux Provider */}
      <div className="App">
        <h1>Redux  Example</h1>
        <CustomerAdd />
        <CustomerView/>

        
      </div>
    </Provider>
  );
}

export default App;
