import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Characters from './pages/Characters';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Navbar name="Teyvat Tracker"/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/characters' element={<Characters />} />
      </Routes>
    </>
  );
}

export default App;
