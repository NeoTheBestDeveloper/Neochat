import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';
import { Provider } from 'react-redux';
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
import { initializeApp } from './redux/app-reducer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Loader from './components/common/loader/Loader';



class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Loader />
    }

    return (
      <BrowserRouter>
        <Provider store={store} >
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
        </Provider>
      </BrowserRouter >
    );
  }
}


const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  }
}


export default compose(
  connect(mapStateToProps, { initializeApp }),
)(App);