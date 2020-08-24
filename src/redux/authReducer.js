import { authAPI } from "../api/api";
import { stopSubmit, reset } from "redux-form";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const LOGOUT_USERS = 'LOGOUT_USER';

let initState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initState, action) => {

    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
            };

        default:
            return state;
    }
}

export const setAuthUserData = (userId, login, email, isAuth) => ({ type: SET_AUTH_USER_DATA, data: { userId, login, email, isAuth } });
export const logoutUser = () => ({ type: LOGOUT_USERS });

export const setAuthUserDataTC = () => (dispatch) => {
    return authAPI.me().then(response => {
        if (response.resultCode === 0) {
            let { email, id, login, } = response.data;
            dispatch(setAuthUserData(id, login, email, true));
        }
    });
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(response => {
        if (response.resultCode === 0) {
            dispatch(setAuthUserDataTC());
            dispatch(reset("login"));
        } else {
            let message = response.messages.length > 0 ? response.messages[0] : "Some error";
            dispatch(stopSubmit("login", { _error: message }));
        }
    });
}

export const logout = () => (dispatch) => {
    authAPI.logout().then(response => {
        if (response.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    });
}



export default authReducer;