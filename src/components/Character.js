import { useEffect, useState } from "react";

const Character = ({charName}) => {
    const [charInfo, setCharInfo] = useState('');
    const [element, setElement] = useState('');
    useEffect(() => {
        const url = `https://api.genshin.dev/characters/${charName}`;

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
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


    return (
        <div className="card items-center justify-evenly bg-base-100 shadow-xl">
            <figure className={charInfo.rarity === 5 ? 'bg-yellow-500 bg-opacity-80 h-3/5': 'bg-violet-800 bg-opacity-70 h-3/5'}><img src={`https://api.genshin.dev/characters/${charName}/icon-big`} alt="character card" /></figure>
            <div className="py-4">
                <h2 className="card-title capitalize">{charName}</h2>
            </div>
            <div className="flex justify-center">
                <div className="inline-block px-2 py-1 text-sm font-semibold rounded-md bg-blue-400 text-gray-900">{charInfo.vision}</div>
                {/* <img src={`https://api.genshin.dev/elements/${charInfo.vision.toLowerCase()}/icon`} alt="element icon"></img> */}
            </div>
        </div>
    )
}

export default Character;