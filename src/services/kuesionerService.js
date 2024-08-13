import axios from "axios";
import { API_URL, getAuthConfig, handleError } from "./utils";

// Function to get all Kuesioners
export const getAllKuesioner = async () => {
  try {
    const response = await axios.get(
      `${API_URL}/api/kuesionerUmkm`,
      getAuthConfig()
    );
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const getOneKuesioner = async (id) => {
  try {
    const response = await axios.get(
      `${API_URL}/api/kuesionerUmkm/${id}`,
      getAuthConfig()
    );
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Function to create a new Kuesioner
export const createKuesioner = async (data) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/kuesionerUmkm`,
      data,
      getAuthConfig()
    );
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const updateKuesioner = async (id, data) => {
  try {
    const response = await axios.put(
      `${API_URL}/api/kuesionerUmkm/${id}`,
      data,
      getAuthConfig()
    );
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const deleteKuesioner = async (id) => {
  try {
    const response = await axios.delete(
      `${API_URL}/api/kuesionerUmkm/${id}`,
      getAuthConfig()
    );
    return response.data;
  } catch (error) {
    handleError(error);
  }
};
