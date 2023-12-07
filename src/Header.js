import logo1 from './logo1.png';
import { Link } from "react-router-dom";
function Header()
{
    return(
        <header>
           <div className="logo">
               <img src={logo1} width="150" height="80" alt="Shiva Concept Solution" />
            </div>  
           <div className="menu">
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>

           </div>
        </header>
    )
}
export default Header;