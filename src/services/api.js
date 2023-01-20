import axios from "axios";

const api = axios.create({
  baseURL: "https://api-recollect.onrender.com",
});

export default api;