   
import { NavLink } from "react-router-dom";


const Navigation = () => {
    return (
        <>
        <nav>
            <ul className="flex justify-evenly">
                <li><NavLink to='/Movies'>Movies</NavLink></li>
                <li><NavLink to='/Actors'>Actors</NavLink></li>
            </ul>
        </nav>
        </>
      );
}
 
export default Navigation;