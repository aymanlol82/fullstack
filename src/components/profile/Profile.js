import './Profile.css'
import {ProfileList} from './profilelist/ProfileList'
import profile from '../../shared/images/profile.gif'


export const Profile = () => {
    
    return (
        <div className ='profileWrapper'>
            <img className='profileImg' src={profile} alt ={'error ..'}/>
            <ProfileList/>
        </div>
    )
}





