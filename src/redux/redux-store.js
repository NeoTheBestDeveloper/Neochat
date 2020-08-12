import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import siteBarReducer from "./siteBarReducer";
import usersReducer from './usersReducer';
import authReducer from "./authReducer";
import thunk from "redux-thunk";

const { createStore, combineReducers, applyMiddleware } = require("redux");

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    siteBar: siteBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));
window.store = store;

export default store;