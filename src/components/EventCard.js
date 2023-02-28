
const EventCard = ({imgSrc}) => {
    return (
        <img src={`/event-images/${imgSrc}.webp`} alt="event" className="rounded-xl w-full"></img>
    )
}

export default EventCard;