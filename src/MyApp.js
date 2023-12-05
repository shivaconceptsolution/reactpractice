import logo1 from './logo1.png';
import './Myapp.css'
function MyApp()
{
    return(<div>
          <h1>SHIVA CONCEPT SOLUTION</h1>
          <hr />
          <img src={logo1} alt='Logo' className='logo' style={{width:250,height:150}}  />
    </div>)
}
export default MyApp;