import avaDefault from '../img/avaSvgDefault.svg';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initState = {
    usersData: [
    ],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1,
    avaDefault: avaDefault,
    isFetching: true,
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

        default:
            return state;
    }

}

export const follow = (id) => ({ type: FOLLOW, id: id });
export const unfollow = (id) => ({ type: UNFOLLOW, id: id });
export const setUsers = (usersData) => ({ type: SET_USERS, usersData });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setUsersTotalCount = (totalUsersCount) => ({ type: SET_USERS_TOTAL_COUNT, totalUsersCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export default userReducer;