import Announcements from "./Announcements";
import Events from "./Events";

const NewsBody = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-5 gap-4 ">
            <Announcements />
            <Events />
        </section>
    )
}

export default NewsBody;