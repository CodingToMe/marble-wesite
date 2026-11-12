
import API from "./axios";

export const submitEnquiry = async (formData) => {
  const response = await API.post("/enquiries", formData);
  return response.data;
};
