import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:9090",
});

export default axiosClient;
