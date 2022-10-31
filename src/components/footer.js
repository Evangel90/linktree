import '../styles/footer.css';
import i4g from '../img/I4G.png';
import zuri from '../img/Vector.png';

const Footer = () => {
    return(
        <div className='footer'>
            <footer>
                <img src={zuri} alt='zuri'/>
                <span>Hng Intenship 9 Frontend task</span>
                <img src={i4g} alt='ingressive'/>
            </footer>
        </div>
    )
}

export default Footer;