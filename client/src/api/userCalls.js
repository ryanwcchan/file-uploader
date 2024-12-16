import axios from "axios";

const BASE_URL = "http://localhost:3000";

const URL = BASE_URL + "/api/users";

const api = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAllUsers = async () => {
  const { data } = await api.get("/");
  return data;
};

export const createUser = async (userData) => {
  const { data } = await api.post("/create", userData);
  return data;
};

export const loginUser = async (userData) => {
  try {
    const { data } = await api.post("login", userData);
    console.log("User logged in:", data);
    return data;
  } catch (error) {
    const errorMessage = error.response?.data?.error || "Invalid login";
    console.error("Login failed:", errorMessage);

    throw new Error(errorMessage);
  }
};
