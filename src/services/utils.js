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
