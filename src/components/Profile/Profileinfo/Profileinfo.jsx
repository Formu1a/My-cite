import Preloader from "../../common/preloader/preloader";
import s from "./Profileinfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const Profileinfo = ({ profile, status, updateStatus }) => {
    if (!profile) {
        return <Preloader />;
    }

    return (
        <div>
            <div className={s.photo}>
                <img
                    src="https://weandthecolor.com/wp-content/uploads/2020/12/Japan-Nights-by-Aishy.jpg"
                    alt="none"
                ></img>
            </div>

            <div className={s.photoA}>
                <img alt="none" src={profile.photos.large}></img>
            </div>

            <div>
                <h4 className={s.name}>{profile.fullName}</h4>
            </div>

            <div className={s.info}>
                <ProfileStatusWithHooks
                    status={status}
                    updateStatus={updateStatus}
                />
                Date of Birth: 18 July
                <br />
                City: Minsk
                <br />
                Education: BNTU'24
                <br />
                {profile.aboutMe}
                <br />
            </div>
        </div>
    );
};

export default Profileinfo;
