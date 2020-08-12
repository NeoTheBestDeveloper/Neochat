import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Nav/Nav';
import ProfileContainer from './components/profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Games from './components/Games/Games';
import Servises from './components/Servises/Servises';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';


function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Nav />
        <div className="app-wrapper-content">
          <Route exact path="/" render={() => <ProfileContainer />} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/news" render={News} />
          <Route path="/music" render={Music} />
          <Route path="/settings" render={Settings} />
          <Route path="/games" render={Games} />
          <Route path="/servises" render={Servises} />
          <Route path="/users" render={() => <UsersContainer />} />
        </div>

      </div>
    </BrowserRouter >
  );

}





export default App;