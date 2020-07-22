import like from './../img/thumbs-up-regular.svg';
import dislike from './../img/thumbs-down-regular.svg';
import likeActive from './../img/thumbs-up-solid.svg';
import dislikeActive from './../img/thumbs-down-solid.svg';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEWPOST-TEXTе';
const CHANGE_LIKE = 'CHANGE-LIKE';
const CHANGE_DISLIKE = 'CHANGE-DISLIKE';

let initState = {
    postData: [
    ],
    newPostText: '',
    likesCountStart: 0,
    dislikesCountStart: 0,
    idStart: 0,
}

const profileReducer = (state = initState, action) => {

    switch (action.type) {
        case ADD_POST: {

            if (state.newPostText.trim().length === 0) {
                return state;
            }

            let newPost = {
                id: state.idStart,
                message: state.newPostText,
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
                newPostText: '',
                postData: [newPost, ...state.postData],
            }
        }
        
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }

        case CHANGE_LIKE: {
            let stateCopy = { ...state };
            stateCopy.postData = [...state.postData];

            for (let post of stateCopy.postData) {
                if (post.id === action.id && post.dislikeCliked === false) {
                    console.log(action.id);
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

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const changeLikeActionCreator = (id) => ({ type: CHANGE_LIKE, id: id });

export const changeDisikeActionCreator = (id) => ({ type: CHANGE_DISLIKE, id: id });

export default profileReducer;