//Will route the user to the levels
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Level1 from './Level1';
import Level2 from './Level2';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Level1/>}/>
          <Route path="/Level2" element={<Level2/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
