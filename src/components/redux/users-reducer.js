let FOLLOW = "FOLLOW";
let UNFOLLOW = "UNFOLLOW";
let SET_USERS = "SET_USERS";

let initialState = {
    users: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map((e) => {
                    if (e.id === action.userId) {
                        return { ...e, followed: true };
                    }
                    return e;
                }),
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map((e) => {
                    if (e.id === action.userId) {
                        return { ...e, followed: false };
                    }
                    return e;
                }),
            };
        }
        case SET_USERS: {
            return { ...state, users: [...action.users] };
        }
        default:
            return state;
    }
};

export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId,
    };
};
export const unfollowAC = (userId) => {
    return { type: UNFOLLOW, userId };
};
export const setUsersAC = (users) => {
    return { type: SET_USERS, users };
};

export default usersReducer;
