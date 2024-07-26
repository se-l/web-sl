import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import TradeEarningsRelease from './articles/TradeEarningsRelease';
import Resources from './articles/Resources';
import MicroElectrode from './articles/MicroElectrode';
import CalibrateSSVI from './articles/CalibrateSSVI';

function App() {
  return (
    <BrowserRouter>    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles/calibrate-ssvi" element={<CalibrateSSVI />} />
        <Route path="/articles/trade-earnings-release" element={<TradeEarningsRelease />} />
        <Route path="/articles/resources" element={<Resources />} />
        <Route path="/articles/micro-electrode" element={<MicroElectrode /> } />
      </Routes>
    </BrowserRouter>   
  );
}


export default App;
