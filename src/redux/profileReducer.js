import like from './../img/thumbs-up-regular.svg';
import dislike from './../img/thumbs-down-regular.svg';
import likeActive from './../img/thumbs-up-solid.svg';
import dislikeActive from './../img/thumbs-down-solid.svg';
import avadefault from './../img/user.svg';
import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const CHANGE_LIKE = 'CHANGE-LIKE';
const CHANGE_DISLIKE = 'CHANGE-DISLIKE';
const SET_PROFILE = 'SET-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';

let initState = {
    postData: [
    ],
    likesCountStart: 0,
    dislikesCountStart: 0,
    idStart: 1,
    profile: null,
    status: ""
}

const profileReducer = (state = initState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.idStart,
                message: action.postText,
                likesCount: state.likesCountStart,
                dislikesCount: state.dislikesCountStart,
                likeSrc: like,
                dislikeSrc: dislike,
                likeCliked: false,
                dislikeCliked: false,
            };

            state.idStart++;

            return {
                ...state,
                postData: [...state.postData, newPost],
            }
        }

        case DELETE_POST:
            return { ...state, postData: state.postData.filter(p => p.id !== action.id) };

        case CHANGE_LIKE: {
            return {
                ...state,
                postData: [...state.postData, state.postData.find(p => p.id === action.id).likesCount += 1]
            };
        }

        case CHANGE_DISLIKE: {
            let post = {...state.postData.find(p => p.id === action.id)};
            if (post.likesCount === 0) {
                post.dislikesCount++
            }
            return {
                ...state,
                postData: [...state.postData, post]
            }
        }

        case SET_PROFILE: {
            return { ...state, profile: action.profile }
        }

        case SET_STATUS: {
            return { ...state, status: action.status }
        }

        default:
            return state;
    }
}

export const addPostActionCreator = (postText) => ({ type: ADD_POST, postText });

export const deletePostAC = (id) => ({ type: DELETE_POST, id });

export const changeLikeAC = (id) => ({ type: CHANGE_LIKE, id: id });

export const changeDisikeAC = (id) => ({ type: CHANGE_DISLIKE, id: id });

export const setProfile = (profile) => ({ type: SET_PROFILE, profile });

export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getProfileTC = (userId) => (dispatch) => {
    profileAPI.getProfile(userId).then(response => {
        if (response.photos.large === null) {
            response.photos.large = avadefault;
        }
        dispatch(setProfile(response));
    });
};

export const getStatusTC = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        if (!response) {
            response = "Not status"
        }
        dispatch(setStatus(response));
    });
};

export const updateStatusTC = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.resultCode === 0) {
            dispatch(setStatus(status));
        }
    });
};

export default profileReducer;