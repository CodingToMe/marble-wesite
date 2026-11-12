
import API from "./axios";

export const adminLogin = async (credentials) => {
  const response = await API.post("/auth/login", credentials);

  const token = response.data.token || response.data.data?.token;

  if (token) {
    localStorage.setItem("adminToken", token);
  }

  return response.data;
};
