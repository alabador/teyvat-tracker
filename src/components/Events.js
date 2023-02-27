import EventData from '../data/events.json';
import EventCard from './EventCard';

const Events = () => {
    return(
        <div className="grid col-span-2 bg-white p-6">
            <section className='flex flex-col gap-6'>
                {EventData.map(gameEvent => {
                    const updatedImage = gameEvent.image.split('/revision')[0]
                    if (gameEvent.category.includes('In-Game')) {
                        return(
                            <EventCard imgSrc={updatedImage}/>
                        )
                    }
                }         
                )}
            </section>
        </div>
    )
}

export default Events;