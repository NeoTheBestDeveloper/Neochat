import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    headers: {
        "api-key": "6e9d6b39-3a51-43f3-8467-b40c9deaae0a"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
});


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
};

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
