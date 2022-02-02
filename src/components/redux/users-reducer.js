let FOLLOW = "FOLLOW";
let UNFOLLOW = "UNFOLLOW";
let SET_USERS = "SET_USERS";
let SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
let SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
let TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 54,
    currentPage: 1,
    isFetching: true,
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
            return { ...state, users: action.users };
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage };
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count };
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching };
        }
        default:
            return state;
    }
};

export const follow = (userId) => {
    return {
        type: FOLLOW,
        userId,
    };
};
export const unfollow = (userId) => {
    return { type: UNFOLLOW, userId };
};
export const setUsers = (users) => {
    return { type: SET_USERS, users };
};
export const setCurrentPage = (currentPage) => {
    return { type: SET_CURRENT_PAGE, currentPage };
};
export const setTotalUsersCount = (count) => {
    return { type: SET_TOTAL_USERS_COUNT, count };
};
export const toggleIsFetching = (isFetching) => {
    return { type: TOGGLE_IS_FETCHING, isFetching };
};

export default usersReducer;
