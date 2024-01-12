import { TryLogin } from '../../api/api';
import * as ACTIONS from './constants';

export const loginSuccessAction = (authState) => {
    return {
        type: ACTIONS.LOGIN_SUCCESS,
        payload: authState
    };
}

export const logoutSuccessAction = () => {
    return {
        type: ACTIONS.LOGOUT
    };
}


export const loginHandler = credentials => {
    return async function (dispatch) {
        const response = await TryLogin(credentials);
        const authState = {
            ...response.data
        }

        dispatch(loginSuccessAction(authState));
        return response;
    };
}




