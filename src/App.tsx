import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import TradeEarningsRelease from './articles/TradeEarningsRelease';

function App() {
  return (
    <BrowserRouter>    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles/TradeEarningsRelease" element={<TradeEarningsRelease />} />
      </Routes>
    </BrowserRouter>   
  );
}

export default App;
