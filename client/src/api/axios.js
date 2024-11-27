import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL_PROD
    // ...existing code...
});

export default axiosInstance;