import { useEffect, useState } from "react";

const Character = ({charName}) => {
    const [charInfo, setCharInfo] = useState('');
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const url = `https://api.genshin.dev/characters/${charName}`;

        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await fetch(url);
                const json = await response.json();
                setLoading(false)
                setCharInfo(json);
                } 
                catch (error) {
                    console.log("error", error);
                }
        };

        fetchData();
    }, [charName]);

    // useEffect(() => {
    //     const url = `https://api.genshin.dev/elements/${charInfo.vision.toLowerCase()}`
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(url);
    //             const json = await response.json();
    //             setElement(json);
    //         }
    //         catch (error) {
    //             console.log("error", error)
    //         }
    //     }
    // })

    function chooseElementBackground(element) {
        if (element === 'Pyro') {
            return 'bg-red-700'
        }
        else if (element === 'Cryo') {
            return 'bg-sky-300'
        }
        else if (element === 'Hydro') {
            return 'bg-blue-500'
        }
        else if (element === 'Anemo') {
            return 'bg-teal-300'
        }
        else if (element === 'Geo') {
            return 'bg-yellow-900'
        }
        else if (element === 'Electro') {
            return 'bg-purple-800'
        }
        else if (element === 'Dendro') {
            return 'bg-green-700'
        }
    }

    return (
        <div className="card items-center justify-evenly bg-base-100 shadow-xl">
            {loading ? (
            <div className="flex items-center justify-center space-x-2">
	            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-blue-400"></div>
	            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-blue-400"></div>
	            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-blue-400"></div>
            </div>
            ) : (
            <figure className={charInfo.rarity === 5 ? 'bg-yellow-500 bg-opacity-80 h-3/5': 'bg-violet-800 bg-opacity-70 h-3/5'}><img src={`https://api.genshin.dev/characters/${charName}/icon-big`} 
            alt="character card" 
            onError={(e) => {
                e.target.src=`https://api.genshin.dev/characters/${charName}/icon`;
                e.target.className = `h-full`  
            }
            }/>
            </figure>
            )
            }
            <div className="py-4">
                <h2 className="card-title capitalize">{charName}</h2>
            </div>
            <div className="flex justify-center">
                <div className={`inline-block px-2 py-1 text-sm font-semibold rounded-md text-gray-900
                ${chooseElementBackground(charInfo.vision)} 
                `}>
                {charInfo.vision}
                </div>
            </div>
        </div>
    )
}

export default Character;