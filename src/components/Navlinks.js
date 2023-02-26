
function Navlinks() {
    return (
        <>
            <ul className="items-stretch hidden space-x-3 md:flex pr-4">
                <li className="flex">
                    <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:border-blue-300">Home</a>
                </li>
                <li className="flex">
                    <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:border-blue-300">Events</a>
                </li>
                <li className="flex">
                    <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:border-blue-300">Characters</a>
                </li>
                <li className="flex">
                    <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:border-blue-300">Items</a>
                </li>
		    </ul>
		    <button className="flex justify-end p-4 md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
		    </button>
        </>
    )
}

export default Navlinks;