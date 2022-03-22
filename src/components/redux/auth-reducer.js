import { usersAPI } from "../../api/api";

let SET_USER_DATE = "SET_USER_DATE";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATE:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};
export const setAuthUserData = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATE,
        payload: {
            userId,
            email,
            login,
            isAuth,
        },
    };
};

export const getAuthUserData = () => (dispatch) => {
    usersAPI.auth().then((response) => {
        if (response.data.resultCode === 0) {
            let { id, email, login } = response.data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    });
};

export const login = (email, password, rememberMe) => (dispatch) => {
    usersAPI.login(email, password, rememberMe).then((response) => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData());
        }
    });
};

export const logout = () => (dispatch) => {
    usersAPI.logout().then((response) => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    });
};

export default authReducer;
