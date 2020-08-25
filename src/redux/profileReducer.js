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

let initState = {
    postData: [
    ],
    likesCountStart: 0,
    dislikesCountStart: 0,
    idStart: 0,
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
                postData: [newPost, ...state.postData],
            }
        }

        case CHANGE_LIKE: {
            let stateCopy = { ...state };
            stateCopy.postData = [...state.postData];

            for (let post of stateCopy.postData) {
                if (post.id === action.id && post.dislikeCliked === false) {
                    if (post.likeCliked) {
                        post.likesCount--;
                        post.likeSrc = like;
                        post.likeCliked = false;
                    } else {
                        post.likesCount++;
                        post.likeSrc = likeActive;
                        post.likeCliked = true;
                    }
                } else if (post.id === action.id && post.dislikeCliked === true) {
                    post.dislikesCount--;
                    post.dislikeSrc = dislike;
                    post.dislikeCliked = false;
                    post.likesCount++;
                    post.likeSrc = likeActive;
                    post.likeCliked = true;
                }
            }
            return stateCopy;
        }

        case CHANGE_DISLIKE: {
            let stateCopy = { ...state };
            stateCopy.postData = [...state.postData];

            for (let post of stateCopy.postData) {
                if (post.id === action.id && post.likeCliked === false) {
                    if (post.dislikeCliked) {
                        post.dislikesCount--;
                        post.dislikeSrc = dislike;
                        post.dislikeCliked = false;
                    } else {
                        post.dislikesCount++;
                        post.dislikeSrc = dislikeActive;
                        post.dislikeCliked = true;
                    }
                } else if (post.id === action.id && post.likeCliked === true) {
                    post.likesCount--;
                    post.likeSrc = like;
                    post.likeCliked = false;
                    post.dislikesCount++;
                    post.dislikeSrc = dislikeActive;
                    post.dislikeCliked = true;
                }
            }
            return stateCopy;
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

export const changeLikeActionCreator = (id) => ({ type: CHANGE_LIKE, id: id });

export const changeDisikeActionCreator = (id) => ({ type: CHANGE_DISLIKE, id: id });

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