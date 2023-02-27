
const AnnouncementCard = ({imgSrc, dates, title,}) => {
    return (
        <article className="grid grid-cols-4">
            <div>
                <h1>{title}</h1>
                <p>{dates}</p>
            </div>
            <img src={imgSrc} alt="event" className="rounded-xl object-cover w-full col-start-4 col-span-1"></img>
        </article>
    )
}

export default AnnouncementCard;