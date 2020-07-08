import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.npoint.io/b9b13353de0783dfd6ad',
});

export default api;
