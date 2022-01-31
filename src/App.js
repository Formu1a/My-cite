import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/NavBar";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import { Route } from "react-router";

const App = () => {
    let someDialogs = () => <DialogsContainer />;
    let someProfile = () => <Profile />;

    let someNews = () => <News />;
    let someMusic = () => <Music />;
    let someSettings = () => <Settings />;
    let someUsers = () => <UsersContainer />;

    return (
        <div className="app-wrapper">
            <Header />
            <Navbar />

            {/* сделать рендер */}

            <div className="app-wrapper-content">
                <Route path="/Dialogs" render={someDialogs} />
                <Route path="/Profile" render={someProfile} />
                <Route path="/News" render={someNews} />
                <Route path="/Music" render={someMusic} />
                <Route path="/Settings" render={someSettings} />
                <Route path="/users" render={() => <UsersContainer />} />
            </div>

            {/* path как ссылка по которой мы переходим */}
        </div>
    );
};

export default App;
