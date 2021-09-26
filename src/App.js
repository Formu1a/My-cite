import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';

import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';




const App = () => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header/>
      <Navbar/>

      
      <div className='app-wrapper-conten'>
      <Route path='/Dialogs' component={Dialogs}/>
      <Route path='/Profile' component={Profile}/>
      <Route path='/News' component={News}/>
      <Route path='/Music' component={Music}/>
      <Route path='/Settings' component={Settings}/>
      </div>


    </div>
    </BrowserRouter>
  );
} 

export default App;
