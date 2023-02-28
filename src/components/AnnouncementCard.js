
const AnnouncementCard = ({imgSrc, dates, title,}) => {
    return (
        <article className="grid grid-cols-4 bg-red-50 p-4">
            <div className="col-span-3">
                <h1 className="font-bold lg:text-xl text-md pb-4">{title}</h1>
                <p className="font-extralight text-xs">{dates}</p>
            </div>
            <img src={imgSrc} alt="event" className="rounded-xl object-cover w-full col-start-4 col-span-1"></img>
        </article>
    )
}

export default AnnouncementCard;