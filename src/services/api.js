import axios from 'axios';

// https://api.thedogapi.com/v1/breeds

// /v1/breeds

const api = axios.create({
  baseURL: 'https://api.thedogapi.com',
  headers: {
    'x-api-key': '4d5af3c3-479e-4539-a128-4cf1e8d36b5d'
  }
});

export default api;