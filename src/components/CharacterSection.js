import { useEffect } from "react";
import { useState } from "react";

const CharacterSection = () => {
    const [charList, setCharList] = useState('');
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
        <div>
            {/* loop through array of characters and render/return a character component */}
            {/* {charList.map(item => {
                return <p>{item}</p>
            })} */}
        </div>
    )
}

export default CharacterSection;