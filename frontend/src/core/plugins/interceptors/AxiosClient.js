import axios from "axios";
import {} from "dotenv/config";

const config = {
  baseURL: " https://mental-support.onrender.com/",
  timeout: process.env.TIMEOUT,
  // headers: { "Content-Type": "application/json" },
  // withCredentials: true,
};

const axiosClient = () => {
  return axios.create({
    ...config,
  });
};
export { axiosClient };
