import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import NewsBody from './components/NewsBody';

function App() {
  return (
    <div className="App">
      <Navbar name="Teyvat Tracker"/>
      <Hero />
      <NewsBody />
    </div>
  );
}

export default App;
