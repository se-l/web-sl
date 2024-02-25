import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import TradeEarningsRelease from './articles/TradeEarningsRelease';
import Resources from './articles/Resources';

function App() {
  return (
    <BrowserRouter>    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles/TradeEarningsRelease" element={<TradeEarningsRelease />} />
        <Route path="/articles/Resources" element={<Resources />} />
      </Routes>
    </BrowserRouter>   
  );
}

export default App;
