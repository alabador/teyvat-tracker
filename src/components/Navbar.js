import Navlinks from "./Navlinks";


function Navbar({name}) {
    return(
        <div className="navbar justify-between">
            <button className="btn btn-ghost normal-case text-xl" href="#"><img src="/mond-icon.png" alt="mondstadt icon" className="w-12"></img>{name}</button>
            <Navlinks />
        </div>
    )
}

export default Navbar;