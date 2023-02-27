import EventData from '../data/events.json';
import EventCard from './EventCard';

const Events = () => {
    return(
        <div>
            <section className='flex flex-col gap-6'>
                {EventData.map(gameEvent => {
                    const updatedImage = gameEvent.image.split('/revision')[0]
                    return(
                        <EventCard imgSrc={updatedImage}/>
                    )
                }         
                )}
            </section>
        </div>
    )
}

export default Events;