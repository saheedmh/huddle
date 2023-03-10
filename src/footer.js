import './style/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return ( 
        <footer>
        <div className="footer">
            <div className="footer-col1">
                <img className="logo" fill="currentColor" src="./images/logo.svg" alt=""/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non molestias, rem cumque atque magnam facilis maiores ipsum asperiores fugiat assumenda, autem error recusandae aperiam impedit omnis dolores! Eaque, atque dolore.</p>
                <p><img src="./images/icon-phone.svg" alt="" /><small>+1-543-123-4567</small></p>
                <p><img src="./images/icon-email.svg" alt="" /><small>saheed@huddle.com</small></p>
            </div>

           
            <div className="footer-col2">
            <p>about us</p>
            <p>What we do</p>
            <p>FAQ</p>
                </div>
                
                <div className="footer-col3">
            <p>career</p>
            <p>blog</p>
            <p>contact</p>
                </div>
       
                <div className="footer-col4">
            <div className='social-icon'>
            <FontAwesomeIcon className='icon' icon={faFacebook}/>
            <FontAwesomeIcon className='icon' icon={faTwitter}/>
            <FontAwesomeIcon className='icon' icon={faInstagram}/>
            <small>&copy; copyright 2023. all right reserve</small>
            </div>
                </div>
       </div>
        </footer>

     );
}
 
export default Footer;