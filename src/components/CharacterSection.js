import { useEffect } from "react";
import { useState } from "react";
import Character from "./Character";

const CharacterSection = () => {
    const [charList, setCharList] = useState([]);
    //useEffect runs everytime the app renders
    useEffect(() => {
        const url = "https://api.genshin.dev/characters";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json);
                setCharList(json);
                } 
                catch (error) {
                    console.log("error", error);
                }
        };

        fetchData();
    }, []);

    

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
            {/* loop through array of characters and render/return a character component */}
            {charList.map(item => {
                return (
                    <Character charName={item}/>
                )
            })}
        </div>
    )
}

export default CharacterSection;