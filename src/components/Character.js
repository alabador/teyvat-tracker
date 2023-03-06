
const Character = ({charName}) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={`https://api.genshin.dev/characters/${charName}/gacha-card`} alt="character card" /></figure>
            <div className="card-body">
                <h2 className="card-title">{charName}</h2>
            </div>
            <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div> 
                <div className="badge badge-outline">Products</div>
            </div>
        </div>
    )
}

export default Character;