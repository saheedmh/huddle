import './style/header.css'
import './style/nav.css';
import './style/medianquery.css';
const Header = () => {
    return ( 
<div className="header">
    <div className="navbar">
        <img src="./images/logo.svg" alt="" className='nav-logo'  />
        <button className='btn-navbar'>Try for free</button>
    </div>
    <div className="nav">
        <div className="navCol-1">
            <h1 className="heading-1">build the community your fan will love</h1>
            <p>Huddle re-image the way we build communities. You have a voice, but so does your audience.Create connection with your users as you engage in discussion.</p>
            <button className='btn'>Get started for free</button>
        </div>
        <div className="navCol-2">
            
            <img src="./images/mockups.svg" alt=""/>
            
        </div>
    </div>
</div>
     );
}
 
export default Header;