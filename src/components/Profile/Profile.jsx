import MyPostContainer from '../My posts/MyPostsContainer';
import s from './Profile.module.css'
import Profileinfo from './Profileinfo/Profileinfo';




const Profile = (props) =>{
    
    return <div>
        <Profileinfo/>
        <MyPostContainer/>
        
    </div>

}

export default Profile;
