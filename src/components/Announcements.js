import EventData from '../data/events.json';
import AnnouncementCard from './AnnouncementCard';


const Announcements = () => {
    return(
        <div className="flex flex-col col-span-3 p-6">
            <h2 className='text-2xl py-4 font-bold'>Announcements</h2>
            <hr className='py-2'></hr>
            <section className='flex flex-col gap-6'>
                {EventData.map(gameEvent => {
                    const updatedImage = gameEvent.image.split('/revision')[0]
                    if (!gameEvent.category.includes('In-Game')) {
                        return(
                            <AnnouncementCard imgSrc={updatedImage} title={gameEvent.title} dates={gameEvent.dates}/>
                        )
                    }
                    return null;
                }         
                )}
            </section>
            <div className='flex flex-col justify-center flex-grow items-center py-4 bg-red-50 mt-6 rounded-xl'>
                <img src='/paimon-sleep.png' alt="paimon sleeping" className='w-16'></img>
                <p className='text-sm pt-4'>No more current events. Check back soon for updates!</p>
            </div>
        </div>
    )
}

export default Announcements;