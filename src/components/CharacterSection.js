import { useEffect } from "react";
import { useState } from "react";

const CharacterSection = () => {
    useEffect(() => {
        const url = "https://api.genshin.dev/characters";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json);
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
        </div>
    )
}

export default CharacterSection;