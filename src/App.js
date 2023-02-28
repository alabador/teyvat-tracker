import './App.css';
import CharacterSection from './components/CharacterSection';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import NewsBody from './components/NewsBody';

function App() {
  return (
    <div className="App">
      <Navbar name="Teyvat Tracker"/>
      <Hero />
      <NewsBody />
      <CharacterSection />
    </div>
  );
}

export default App;
