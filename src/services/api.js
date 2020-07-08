import axios from 'axios';

const api = axios.create({
  baseURL: 'https://guilhermeseckert.github.io/RocketShoes/:3333',
});

export default api;
