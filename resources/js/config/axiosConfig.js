import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://ticketier.test/'
});

export default instance;
