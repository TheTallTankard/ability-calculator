import logo from '../logo.svg';
import '../styles/Footer.css';

function Footer () {
    return (
        <div className="Footer">
            Built with React <img src={logo} className="react-logo" alt="react logo" />
        </div>
    )
}

export default Footer;