import MyPostContainer from "../My posts/MyPostsContainer";
import s from "./Profile.module.css";
import Profileinfo from "./Profileinfo/Profileinfo";

const Profile = (props) => {
    return (
        <div className={s.mainProfile}>
            <Profileinfo
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
            />

            <MyPostContainer />
        </div>
    );
};

export default Profile;
