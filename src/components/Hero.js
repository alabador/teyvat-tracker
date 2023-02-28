
function Hero() {
    return (
        <div className="carousel w-full max-h-[65vh]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="/windblumes-breath.webp" className="w-full object-cover object-top 2xl:object-contain" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
                <img src="/dev-discussion.webp" className="w-full object-cover object-middle 2xl:object-contain" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
                <img src="/liyue-cuisine.webp" className="w-full object-cover object-top 2xl:object-contain" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div> 
        </div>
    )
}

export default Hero;