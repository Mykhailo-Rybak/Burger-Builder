import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-63f66-default-rtdb.firebaseio.com/'
});

export default instance;
