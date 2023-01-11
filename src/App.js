import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Daf from './pages/Daf';



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="daf" element={<Daf />} />
      </Routes>
    </div>
  );
}

export default App;
