export default function Button ({onClick, name}){
    return(
        <button onClick={onClick} className="rounded p-2 m-2">
            {name}
        </button>
        
    )
}