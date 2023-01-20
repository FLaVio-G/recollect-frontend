import axios from "axios";

const api = axios.create({
  baseURL: "https://api-recollect.onrender.com",
  headers: {
    "Content-type": "application/json"
}
});

export default api;