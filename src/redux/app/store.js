import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import authReducer from './reducer';
import SecureLS from 'secure-ls'; // Secure Local Storage
import {thunk} from "redux-thunk";
import { setAuthorizationHeader } from '../../api/api';

const secureLs = new SecureLS();

const getStateFromLocalStorage = () => {
    let stateInLocalStorage = {
        isLoggedIn: false,
        userID: undefined,
        username: undefined,
        userrole: undefined,
        token: undefined
        
    }

    const getStateInLocalStorage = secureLs.get('auth');

    if (getStateInLocalStorage) {
        stateInLocalStorage = getStateInLocalStorage;
    }
    return stateInLocalStorage;
}

const updateStateInStorage = newState => {
    secureLs.set('auth', newState);
}

const configureStore = () => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const initialState = getStateFromLocalStorage();
    setAuthorizationHeader(initialState);
    const store = createStore(authReducer, initialState, composeEnhancers(applyMiddleware(thunk)));

    store.subscribe(() => {
        updateStateInStorage(store.getState());
        setAuthorizationHeader(store.getState());
    });

    return store;
}

export default configureStore;