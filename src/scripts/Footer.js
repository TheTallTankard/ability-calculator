import logo from '../logo.svg';
import '../styles/Footer.css';

function Footer () {
    return (
        <div className="Footer">
            <sm>Built with React</sm>
            <img src={logo} className="react-logo" alt="react logo" />
        </div>
    )
}

export default Footer;