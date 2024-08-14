import { jwtDecode } from "jwt-decode";

export const API_URL = "https://backend-descanda-data-entry.vercel.app";

// Helper function to get headers with authorization token
export const getAuthConfig = () => {
  const token = localStorage.getItem("token");
  console.log("Token API", token);
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

// Utility function to handle errors
export const handleError = (error) => {
  if (error.response) {
    throw error.response.data;
  } else {
    throw new Error("Network error");
  }
};

export const getUserFullNameByEmail = (email, users) => {
  // Cari pengguna dengan email yang sesuai
  const user = users.find(user => user.email === email);

  // Jika pengguna ditemukan, kembalikan nama lengkapnya
  if (user) {
    return user.namaLengkap;
  } else {
    // Jika pengguna tidak ditemukan
    return `Pengguna dengan email ${email} tidak ditemukan.`;
  }
};

export const decodeAndSaveToken = (token) => {
  try {
    // Decode the token
    const decoded = jwtDecode(token);

    if (decoded) {
      const { namaLengkap, peran } = decoded;

      // Simpan nama lengkap dan peran di localStorage
      localStorage.setItem('namaLengkap', namaLengkap);
      localStorage.setItem('peran', peran);

      console.log('Nama Lengkap dan peran telah disimpan di localStorage');
    } else {
      throw new Error('Token tidak valid.');
    }
  } catch (error) {
    console.error('Error decoding token:', error.message);
  }
};
