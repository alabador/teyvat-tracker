import Hero from "../components/Hero"
import NewsBody from "../components/NewsBody"
import CharacterSection from "../components/CharacterSection"

const Home = () => {
    return (
        <div className="Home">
            <Hero />
            <NewsBody />
            <CharacterSection />
        </div>
    )
}

export default Home;