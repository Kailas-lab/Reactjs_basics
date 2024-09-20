import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/*" element={<User />} /> {/* Notice the "/*" */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
