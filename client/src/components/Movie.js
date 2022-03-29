import { Link, useParams } from "react-router-dom"
import Movies from "./Movies"

const Movie = ({data}) => { // store data

    const {name} = useParams();
    //console.log(name);

    const movieList = data.find((movieListe)=> { // for filmer 
        return movieListe.slug === name
    })
    
    return (
        <>
        
        <article className="py-2 px-2">
            <h1 className="font-bold text-xl">{movieList.title}</h1>
            <img src={movieList.poster.asset.url} className="mb-3 max-w-xs"></img>
            { movieList.actor2 !=null ?  ( <h3 className="font-bold mb-3"> Movie Stars: {movieList.actor}  and {movieList?.actor2}</h3>) : (<h3 className="font-bold"> Movie Star: {movieList.actor} </h3>) }
            <p className="mb-3">{movieList.tekst}</p>

            <button className="mb-3"><Link to="/movies" className="bg-orange-500 text-sm text-blue-50 py-2 px-2 rounded-lg">Back to movies</Link></button>
        </article>
        
        
        </>
    )
}
export default Movie