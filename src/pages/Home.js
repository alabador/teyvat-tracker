import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import NewsBody from "../components/NewsBody"
import CharacterSection from "../components/CharacterSection"

const Home = () => {
    return (
        <div className="Home">
            <Navbar name="Teyvat Tracker"/>
            <Hero />
            <NewsBody />
            <CharacterSection />
        </div>
    )
}

export default Home;