import { usersAPI } from "../../api/api";

let ADD_POST = "ADD-POST";
let SET_USER_PROFILE = "SET_USER_PROFILE";
let SET_STATUS = "SET_STATUS";

let initialState = {
    posts: [
        { id: 1, message: "Hey,why nobody love me ?", likeCounts: 23 },
        { id: 2, message: "Its our new program! Hey!", likeCounts: 4 },
    ],
    profile: null,
    status: "",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likeCounts: 0,
            };
            let stateCopy = { ...state };
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = "";
            return stateCopy;
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
            };
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile };
        }
        default:
            return state;
    }
};

export const addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText,
    };
};
export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status,
    };
};

export const setUserProfile = (profile) => {
    return { type: SET_USER_PROFILE, profile };
};
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then((response) => {
        dispatch(setUserProfile(response.data));
    });
};

export const getStatus = (userId) => (dispatch) => {
    usersAPI.getStatus(userId).then((response) => {
        dispatch(setStatus(response.data));
    });
};

export const updateStatus = (status) => (dispatch) => {
    usersAPI.updateStatus(status).then((response) => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    });
};

export default profileReducer;
