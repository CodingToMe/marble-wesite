
import API from "./axios";

export const submitEnquiry = async (formData) => {
  const response = await API.post("/enquiries", formData);
  return response.data;
};


export const getEnquiry = async (formData) => {
  const response = await API.get("/enquiries", formData);
  return response.data;
};

export const getOrders = async (formData) => {
  const response = await API.get("/order", formData);
  return response.data;
};