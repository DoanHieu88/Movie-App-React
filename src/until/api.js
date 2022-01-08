import axios from 'axios';

const api = axios.create({
    baseURL: `http://www.omdbapi.com/`,
    timeout: '20000',
})

export default api;