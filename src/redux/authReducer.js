import { authAPI } from "../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

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
                isAuth: true,
            };

        default:
            return state;
    }
}

export const setAuthUserData = (userId, login, email) => ({ type: SET_AUTH_USER_DATA, data: { userId, login, email } });

export const setAuthUserDataTC = () => (dispatch) => {
    authAPI.login().then(response => {
        if (response.resultCode === 0) {
            let { userId, login, email } = response.data;
            dispatch(setAuthUserData(userId, login, email));
        }
    });
}

export default authReducer;