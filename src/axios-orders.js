import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-app-2f308.firebaseio.com/'
});

export default instance;