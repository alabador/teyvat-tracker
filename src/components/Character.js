import { useEffect, useState } from "react";

const Character = ({charName}) => {
    const [charInfo, setCharInfo] = useState('');
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


    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={`https://api.genshin.dev/characters/${charName}/icon-big`} alt="character card" /></figure>
            <div className="card-body">
                <h2 className="card-title">{charName}</h2>
            </div>
            <div className="card-actions justify-center">
                <div className="inline-block px-2 py-1 text-sm font-semibold rounded-md bg-blue-400 text-gray-900">{charInfo.vision}</div>
            </div>
        </div>
    )
}

export default Character;