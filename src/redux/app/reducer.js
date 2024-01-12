import * as ACTIONS from "./constants";

const defaultState = {
    isLoggedIn: false,
    userID: undefined,
    username: undefined,
    userrole: undefined,
    token: undefined
}

const authReducer = (state = { ...defaultState }, action) => {
    if (action.type === ACTIONS.LOGIN_SUCCESS) {
        return {
            ...action.payload,
            isLoggedIn: true
        };
    }
    else if(action.type === ACTIONS.LOGOUT){
        return {
            ...defaultState,
            isLoggedIn: false
        }
    }
    return state;
}

export default authReducer;