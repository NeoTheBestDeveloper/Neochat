import { createSelector } from "reselect";

export const getUsersSelector = (state) => {
    return state.usersPage.usersData;
    
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getAvaDefault = (state) => {
    return state.usersPage.avaDefault;
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}

export const getUsers = createSelector(getUsersSelector, (usersData) => {
    return usersData.filter(u => true);
});