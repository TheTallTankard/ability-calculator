import tankard from '../TheTallTankard_Zoomed_NoBackground.png';
import '../styles/Footer.css';

function Footer () {
    return (
        <div className="Footer">
            The Tall Tankard
            <img src={tankard} className="tankard-logo flipped" alt="tankard logo" />
            <img src={tankard} className="tankard-logo" alt="tankard logo" />
        </div>
    )
}

export default Footer;