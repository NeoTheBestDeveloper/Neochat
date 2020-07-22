import avaJane from './../img/7.jpg';
import avaMark from './../img/30.jpg';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import siteBarReducer from './siteBarReducer';

let store = {
  _state: {

    profilePage: {
      postData: [
      ],
      newPostText: '',
      likesCountStart: 0,
      dislikesCountStart: 0,
      idStart: 0,
    },

    dialogsPage: {
      dialogsData: [
        { id: 1, name: "Jane" },
        { id: 2, name: "Mark" },
      ],
      messagesData: [
      ],
      newMessageText: '',
      idStart: 0,
    },

    siteBar: {
      friendsData: [
        { id: 1, name: "Jane", ava: avaJane },
        { id: 2, name: "Mark", ava: avaMark }
      ],
    }
  },

  getState() {
    return this._state;
  },


  subscribe(observer) {
    this._callSubscriber = observer;
  },

  _callSubscriber() {

  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.siteBar = siteBarReducer(this._state.siteBar, action);
    this._callSubscriber(this._state);

  },
}

export default store;
window.store = store;