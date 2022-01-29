import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router';




const App = (props) => {
  let someDialogs = ()=> <Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch}/>
  let someProfile = ()=> <Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />
  
  let someNews = ()=> <News/>
  let someMusic  = ()=> <Music/>
  let someSettings = ()=> <Settings/>

  return (
    <div className='app-wrapper'>
      <Header/>
      <Navbar/>

      {/* сделать рендер */}
      
      <div className='app-wrapper-content'>
      <Route path='/Dialogs' render={someDialogs}/>
      <Route path='/Profile' render={someProfile}/>
      <Route path='/News' render={someNews}/>
      <Route path='/Music' render={someMusic}/>                          
      <Route path='/Settings' render={someSettings}/>
      </div>
    
     {/* path как ссылка по которой мы переходим */}

    
    </div>
  
  );
} 

export default App;
