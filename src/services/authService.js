import axios from 'axios';
import { API_URL } from './utils';

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/user/login`, {
      email,
      password
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/user/all`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
