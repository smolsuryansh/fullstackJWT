import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080'
axios.defaults.headers.post["Content-type"] = 'application/json'

// getting auth token
export const getAuthToken = () => {
    return window.localStorage.getItem("auth_token");
};

// getting auth token
export const setAuthToken = (token) => {
    window.localStorage.setItem("auth_token", token);
};

export const request = (method, url, data) => {

    // getting auth token
    let headers = {};

    if(getAuthToken !== null && getAuthToken() !== "null") {
        headers = {"Authorization": `Bearer ${getAuthToken()}`};
    }

    return axios({
        method: method,
        url: url,
        data: data
    });
};