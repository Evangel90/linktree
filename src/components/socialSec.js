import '../styles/socialSec.css';
import slackImg from '../img/slack.png';
import gitImg from '../img/Socialicon.png';

const SocialSec = () => {
    return(
        <div className='socialsec'>
            <img src={slackImg} className='socialImg' alt='slack'/>
            <img src={gitImg} className='socialImg' alt='github'/>
        </div>
    )
}

export default SocialSec;