import avaDefault from '../img/avaSvgDefault.svg';
import { usersAPI, followAPI } from './../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWINGPROGRESS';

let initState = {
    usersData: [
    ],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1,
    avaDefault: avaDefault,
    isFetching: true,
    followingInProgress: [],
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.id) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.id) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }

        case SET_USERS:
            return { ...state, usersData: action.usersData, };

        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage };

        case SET_USERS_TOTAL_COUNT:
            return { ...state, totalUsersCount: action.totalUsersCount };

        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching };

        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : [...state.followingInProgress.filter(id => id !== action.userId)]
            };

        default:
            return state;
    };
}; 

export const followSuccess = (id) => ({ type: FOLLOW, id: id });
export const unfollowSuccess = (id) => ({ type: UNFOLLOW, id: id });
export const setUsers = (usersData) => ({ type: SET_USERS, usersData });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setUsersTotalCount = (totalUsersCount) => ({ type: SET_USERS_TOTAL_COUNT, totalUsersCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowigProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });

export const getUsersThunkCreater = (currentPage, pageSize) => {

    return (dispatch) => {

        dispatch(toggleIsFetching(true));

        usersAPI.getUsers(currentPage, pageSize).then(response => {
            dispatch(setCurrentPage(currentPage));
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(response.items));
            dispatch(setUsersTotalCount(response.totalCount));

        });
    }
};

export const unfollow = (userId) => {

    return (dispatch) => {

        dispatch(toggleFollowigProgress(true, userId));
        followAPI.unfollow(userId).then(response => {
            if (response.resultCode === 0) {
                unfollowSuccess(userId);
            }
            dispatch(toggleFollowigProgress(false, userId));
        });
    }
};

export const follow = (userId) => {

    return (dispatch) => {

        dispatch(toggleFollowigProgress(true, userId));
        followAPI.follow(userId).then(response => {
            if (response.resultCode === 0) {
                followSuccess(userId);
            }
            dispatch(toggleFollowigProgress(false, userId));
        })
    }
};

export default userReducer;