import Profile from "../Profile"
import s from './Profileinfo.module.css'

const Profileinfo = () =>{
    return <div>
    <div className={s.photo}>
    <img src='https://data.whicdn.com/images/331364165/original.jpg' alt='none'></img>
    </div>
    <div className={s.photoA}>
    <img alt='none' src='https://cdn.dribbble.com/users/1040983/screenshots/5630845/beard2-01_4x.png?compress=1&resize=400x300'></img>
    </div>
    <div>
        <h4 className={s.name}>
            Borisevich.K
        </h4>
    </div>
    <div className={s.info}>
        Date of Birth: 18 July<br />
        City: Minsk<br />
        Education: BNTU'24<br />
        Web-site:non<br />
    </div>
</div>
}


export default Profileinfo