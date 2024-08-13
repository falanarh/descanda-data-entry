import axios from "axios";
import { API_URL, getAuthConfig, handleError } from "./utils";

// Function to get all listings
export const getAllListing = async () => {
  try {
    const response = await axios.get(
      `${API_URL}/api/listingUmkm`,
      getAuthConfig()
    );
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const getUmkmListings = async () => {
  try {
    const response = await axios.get(
      `${API_URL}/api/listingUmkm/umkm`,
      getAuthConfig()
    );
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const getOneListing = async (id) => {
  try {
    const response = await axios.get(
      `${API_URL}/api/listingUmkm/${id}`,
      getAuthConfig()
    );
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Function to create a new listing
export const createListing = async (data) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/listingUmkm`,
      data,
      getAuthConfig()
    );
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const updateListing = async (id, data) => {
  try {
    const response = await axios.put(
      `${API_URL}/api/listingUmkm/${id}`,
      data,
      getAuthConfig()
    );
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const deleteListing = async (id) => {
  try {
    const response = await axios.delete(
      `${API_URL}/api/listingUmkm/${id}`,
      getAuthConfig()
    );
    return response.data;
  } catch (error) {
    handleError(error);
  }
};
