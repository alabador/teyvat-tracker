
function Hero() {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/03/Genshin-Impact-Inazuma-Island.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome to Teyvat</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                 </div>
            </div>
        </div>
    )
}

export default Hero;