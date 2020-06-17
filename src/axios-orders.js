import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-75215.firebaseio.com/'
});

export default instance;