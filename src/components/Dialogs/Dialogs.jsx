import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return(
        <div className={s.Dialogs} >
            <div className={s.Dialogsitem}>
                <div className={s.dialog + ' ' + s.active}>
                    Dima
                </div>
                {/* <div className={s.dialog}>
                    <Navlink to='/Arina'>Arina</Navlink>
                </div>
                <div className={s.dialog}>
                    <Navlink to='/Arina'>Anton</Navlink>
                </div>
                <div className={s.dialog}>
                    <Navlink to='/Arina'>Anton</Navlink>
                </div>
                <div className={s.dialog}>
                    <Navlink to='/Arina'>Igor</Navlink>
                </div>
                <div className={s.dialog}>
                    <Navlink to='/Arina'>Yoto</Navlink>
                </div> */}
            </div>
            <div className={s.Massages}>
                <div className={s.massage}>Hi</div>
                <div className={s.massage}>How are you</div>
                <div className={s.massage}>yooooooooo</div>

            </div>
        </div>
    )
    
}
export default Dialogs;