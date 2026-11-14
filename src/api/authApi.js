
import API from "./axios";

export const adminLogin = async (credentials) => {
  const response = await API.post("/auth/login", credentials);

  const token = response.data.token || response.data.data?.token;

  if (token) {
    localStorage.setItem("adminToken", token);
  }

  return response.data;
};

export const register = async (payload) => {
  const { data } = await API.post("/auth/register", payload);
  return data; 
};