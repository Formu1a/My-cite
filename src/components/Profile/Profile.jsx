import Post from '../My posts/MyPost';
import s from './Profile.module.css'
import Profileinfo from './Profileinfo/Profileinfo';




const Profile = (props) =>{
    
    return <div>
        <Profileinfo/>
        <Post posts={props.profilePage.posts} dispatch={props.dispatch} newPostText={props.profilePage.newPostText}  />
        
    </div>

}

export default Profile;
