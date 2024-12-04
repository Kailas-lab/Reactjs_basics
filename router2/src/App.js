
//import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./components/Home";
import Login from './components/Login';
import Settings from './components/Settings';

function App() {
  return (
    // <div className="App">
    //   hello
    //   <Home/>
      
    // </div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/settings' element={<Settings/>}></Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
