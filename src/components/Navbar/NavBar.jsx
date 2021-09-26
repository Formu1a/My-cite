import s from './NavBar.module.css'



const Navbar =() =>{

return<nav className={s.nav}>
        <div className={s.item}>
         <a href="/Profile">Profile</a>
        </div>
        <div className={s.item}>
         <a href="/Dialogs">Massages</a>
        </div>
        <div className={s.item}>
         <a href='/News'>News</a>
        </div>
        <div className={s.item}>
         <a href='/Music'>Music</a>
        </div>
        <div className={`${s.item} ${s.itemS}`}>
         <a href='/Settings'>Settings</a>
        </div>
      </nav>
}
export default Navbar;