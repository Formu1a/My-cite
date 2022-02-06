import { getUsers } from "../../api/api";
import { usersAPI } from "../../api/api";

let FOLLOW = "FOLLOW";
let UNFOLLOW = "UNFOLLOW";
let SET_USERS = "SET_USERS";
let SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
let SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
let TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
let TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 200,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
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
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(
                          (id) => id != action.userId
                      ),
            };
        }
        default:
            return state;
    }
};

export const followSuccess = (userId) => {
    return {
        type: FOLLOW,
        userId,
    };
};
export const unfollowSuccess = (userId) => {
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
export const toggleIsFollowingProgress = (isFetching, userId) => {
    return { type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId };
};

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then((data) => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            // this.props.setTotalUsersCount(response.data.totalCount); -- показывает всех пользоватетлей (1700) много страниц будет
        });
    };
};
export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId));
        usersAPI.follow(userId).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(followSuccess(userId));
            }
            dispatch(toggleIsFollowingProgress(false, userId));
        });
    };
};
export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId));
        usersAPI.unfollow(userId).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(unfollowSuccess(userId));
            }
            dispatch(toggleIsFollowingProgress(false, userId));
        });
    };
};

export default usersReducer;
