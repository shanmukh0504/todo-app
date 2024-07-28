// import axios from 'axios'

// const axiosInstance = axios.create({
//     baseURL: 'http://localhost:5000',
//     withCredentials: true,
// })

// export default axiosInstance;

import axios from 'axios';

const instance = axios.create({
    baseURL: '/.netlify/functions',
    withCredentials: true,
});

export default instance;
