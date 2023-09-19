// @flow
import axios from 'axios';


// appUrl is a global variable. See resources/views/index.blade.php
export const BASE_URL = `${window.appUrl ?? 'http://localhost:8000'}/api`;

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  config.headers = {
    // Authorization: `Bearer ${token.replace('"',"")}`,
    // 'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  return config;
});

export default api;