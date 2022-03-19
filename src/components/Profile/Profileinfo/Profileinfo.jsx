import Preloader from "../../common/preloader/preloader";
import s from "./Profileinfo.module.css";
import ProfileStatus from "./ProfileStatus";

const Profileinfo = (props) => {
    if (!props.profile) {
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
                <img alt="none" src={props.profile.photos.large}></img>
            </div>

            <div>
                <h4 className={s.name}>{props.profile.fullName}</h4>
            </div>

            <div className={s.info}>
                <ProfileStatus
                    status={props.status}
                    updateStatus={props.updateStatus}
                />
                Date of Birth: 18 July
                <br />
                City: Minsk
                <br />
                Education: BNTU'24
                <br />
                {props.profile.aboutMe}
                <br />
            </div>
        </div>
    );
};

export default Profileinfo;
