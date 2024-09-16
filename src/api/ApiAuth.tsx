'use client'

import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const ApiAuth = axios.create({
    baseURL,
    headers: {
        Accept: 'application/json',
    },
});

ApiAuth.interceptors.request.use(
    (config) => {
        const member = JSON.parse(localStorage.getItem("member")!);
        const token = member ? member.token : null;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

ApiAuth.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            // Token expired or unauthorized
            // Log out the user and redirect to login
            localStorage.removeItem("member");
            location.href = '/'
        }
        return Promise.reject(error);
    }
);

export default ApiAuth;