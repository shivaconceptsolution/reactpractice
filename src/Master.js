import Footer from './Footer';
import Header from './Header';
import './Myapp.css'
import { Outlet } from "react-router-dom";
function Master()
{
    return(
        <div>
        <Header />
       
        <Outlet />
       
       
        <Footer />
        </div>
    )
}
export default Master;