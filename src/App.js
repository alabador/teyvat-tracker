import { Route, Routes } from 'react-router-dom';
import './App.css';
import Characters from './pages/Characters';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/characters' element={<Characters />} />
    </Routes>
  );
}

export default App;
