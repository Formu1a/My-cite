import MyPostContainer from "../My posts/MyPostsContainer";
import s from "./Profile.module.css";
import Profileinfo from "./Profileinfo/Profileinfo";
import ProfileContainer from "./ProfileContainer";

const Profile = (props) => {
    return (
        <div>
            <Profileinfo profile={props.profile} />

            <MyPostContainer />
        </div>
    );
};

export default Profile;
