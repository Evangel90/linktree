import '../styles/profile.css';
import profile_img from '../img/profile__img.png'

const Profile = () => {
    return(
        <div id='profile'>
            <img id='profile_img' src={profile_img} alt="profile_img"/>
            <h1 id='twitter'>Annette Black</h1>
        </div>
    )
}

export default Profile