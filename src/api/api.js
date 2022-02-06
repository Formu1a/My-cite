import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "6cc60ee9-2297-42fe-a7fc-ee37c082ac6b",
    },
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response) => {
                return response.data;
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`);
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`);
    },
    auth() {
        return instance.get(`auth/me`, {
            withCredentials: true,
        });
    },
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
};

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=$`).then((response) => {
        return response.data;
    });
};
