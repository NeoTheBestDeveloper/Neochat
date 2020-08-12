import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    headers: {
        "api-key": "d48157d2-2191-474f-a96d-4fce9597c7d0"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
});


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    getProfile(id) {
        return instance.get(`profile/${id}`).then(response => response.data);
    },
}

export const followAPI = {
    unfollow(id) {
        return instance.delete(`follow/${id}`).then(response => response.data);
    },
    follow(id) {
        return instance.post(`follow/${id}`).then(response => response.data);
    },
}

export const authAPI = {
    login() {
        return instance.get(`auth/me`).then(response => response.data);
    },
}
