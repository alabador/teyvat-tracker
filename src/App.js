import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar name="Teyvat Tracker"/>
      <Hero />
    </div>
  );
}

export default App;
