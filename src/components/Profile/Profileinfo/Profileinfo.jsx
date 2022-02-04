import Preloader from "../../common/preloader/preloader";
import Profile from "../Profile";
import s from "./Profileinfo.module.css";

const Profileinfo = (props) => {
    if (!props.profile) {
        return <Preloader />;
    }

    return (
        <div>
            <div className={s.photo}>
                <img
                    src="https://data.whicdn.com/images/331364165/original.jpg"
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
