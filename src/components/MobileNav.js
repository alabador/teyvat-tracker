import { useState } from "react";
import { Link } from "react-router-dom";

function MobileNav({state}) {
    const [showChild, setShowChild] = useState(false);
    function handleClick() {
        state(false);
    }
    return (
        <div className="fixed top-0 right-0 h-screen w-1/2 bg-white z-10">
            <ul className="flex flex-col w-full h-full ">
                <li className="">
                    <Link to="/" className="flex items-center px-4 py-8 border-b-2 hover:bg-slate-100" onClick={handleClick}>Home</Link>
                </li>
                <li className="">
                    <Link to="/" className="flex items-center px-4 py-8 border-b-2 hover:bg-slate-100" onClick={handleClick}>Events</Link>
                </li>
                <li className="">
                    <Link to="/characters" className="flex items-center px-4 py-8 border-b-2 hover:bg-slate-100" onClick={handleClick}>Characters</Link>
                </li>
                <li className="flex flex-col items-center flex-1 self-center pt-16"
                onClick={() => {
                    setShowChild(!showChild)
                }}
                >
                    {showChild ? <img src="./thinking-paimon.gif" alt="thinking paimon"></img> : <img src="./shocked-paimon.gif" alt="thinking paimon"></img>}
                    {showChild ? <p>please don't click paimon...</p> : <p>how could you...</p>}
                </li>
		    </ul>
        </div>
    )
}

export default MobileNav;