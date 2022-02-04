import "./App.css";
import Navbar from "./components/Navbar/NavBar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import { Route } from "react-router";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => {
    let someDialogs = () => <DialogsContainer />;

    let someNews = () => <News />;
    let someMusic = () => <Music />;
    let someSettings = () => <Settings />;

    return (
        <div className="app-wrapper">
            <HeaderContainer />
            <Navbar />

            {/* сделать рендер */}

            <div className="app-wrapper-content">
                <Route path="/Dialogs" render={someDialogs} />
                <Route
                    path="/Profile/:userId?"
                    render={() => <ProfileContainer />}
                />
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
