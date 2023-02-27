import EventData from '../data/events.json';
import AnnouncementCard from './AnnouncementCard';


const Announcements = () => {
    return(
        <div className="grid col-span-3 bg-white p-6">
            <section className='flex flex-col gap-6'>
                {EventData.map(gameEvent => {
                    const updatedImage = gameEvent.image.split('/revision')[0]
                    if (!gameEvent.category.includes('In-Game')) {
                        return(
                            <AnnouncementCard imgSrc={updatedImage} title={gameEvent.title} dates={gameEvent.dates}/>
                        )
                    }
                }         
                )}
            </section>
        </div>
    )
}

export default Announcements;