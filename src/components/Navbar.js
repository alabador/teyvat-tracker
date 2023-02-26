
function Navbar({name}) {
    return(
        <div className="navbar justify-between">
            <button className="btn btn-ghost normal-case text-xl" href="#">{name}</button>
            
        </div>
    )
}

export default Navbar;