import axios from "axios";

const BASE_URL = "http://localhost:3000";

const URL = BASE_URL + "/api/users";

export const getAllUsers = async () => {
  const { data } = await axios.get(URL);
  return data;
};

export const createUser = async (userData) => {
  const { data } = await axios.post(`${URL}/create`, userData);
  return data;
};
