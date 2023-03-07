import EventData from '../data/events.json';
import EventCard from './EventCard';

const Events = () => {
    const date = new Date();
    let currentMonth = date.toLocaleString('default', {month: 'long'});
    return(
        <div className="grid col-span-2 bg-white p-6">
            <h2 className='text-2xl py-4 font-bold'>{currentMonth} Events</h2>
            <hr className='py-2'></hr>
            <section className='flex flex-col gap-6'>
                {EventData.map(gameEvent => {
                    // const updatedImage = gameEvent.image.split('revision')[0]
                    const imageString = gameEvent.image.split('/').find(el => el.includes('_'));
                    const eventString = imageString.split('.')[0]
                    if (gameEvent.category.includes('In-Game')) {
                        return(
                            <EventCard imgSrc={eventString}/>
                        )
                    }
                    return null;
                }         
                )}
            </section>
        </div>
    )
}

export default Events;