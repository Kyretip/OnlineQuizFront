import axios from "axios"



export const TryLogin = (data) => {
    return axios.post(`api/Auth/login`, data)
}

export const GetAllQuizByUserId = (userId) => {
    return axios.get(`api/Quiz/GetAllbyUser?UserId=${userId}`);
}
export const GetAllLessonByUserId = (userId) => {
    return axios.get(`api/Lesson/getforteacher?userId=${userId}`);
}

export const TryRegister = (data) => {
    return axios.post(`api/Auth/register`, data);
}


export const TryQuizEnter = (data) => {
    return axios.post(`api/Quiz/GetFullQuizByQuizUser`, data);
}

export const TryQuizAdd = (data) => {
    return axios.post(`api/Quiz/Add`, data);
}










export const setAuthorizationHeader = ({ token, isLoggedIn }) => {
    if (isLoggedIn) {
        const authorizationValue = `Bearer ${token}`
        return axios.defaults.headers['Authorization'] = authorizationValue;
    } else {
        delete axios.defaults.headers['Authorization'];
    }
}