//Will route the user to the levels
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Level1 from './Level1';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Level1/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
