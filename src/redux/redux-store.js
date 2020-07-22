import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import siteBarReducer from "./siteBarReducer";
import usersReducer from './usersReducer';

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    siteBar: siteBarReducer,
    usersPage: usersReducer,
});

let store = createStore(reducers);
window.store = store;

export default store;