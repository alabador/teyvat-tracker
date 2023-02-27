import Announcements from "./Announcements";
import Events from "./Events";

const NewsBody = () => {
    return (
        <section className="grid grid-cols-5 gap-8 bg-slate-50">
            <Announcements />
            <Events />
        </section>
    )
}

export default NewsBody;