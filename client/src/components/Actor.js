
import { Link, useParams } from "react-router-dom";

const Actor = ({ actor }) => {

    const { name } = useParams();
    console.log(name);

    const actorList = actor.find((actorListe) => { //L 
        return actorListe.slug === name
    })

    return (
        <>
            <article >
                <img src={actorList.poster.asset.url} alt="Skuespiller" className=" w-1/4 border-2 border-slate-900 round rounded-t-lg"></img>
                <h2 className="text-lg font-bold">{actorList.actor}</h2>
                <p className="mb-2">{actorList.actorTextField}</p>
                <h3>
                    Cast in: {actorList.movie}
                </h3>

            </article>

            <button className="mb-3 mt-3"><Link to="/Actors" className="bg-grey-500 text-sm text-blue-50 py-2 px-2 rounded-lg "> Actors again </Link></button>
        </>


    )// channge to actorList

}
export default Actor
