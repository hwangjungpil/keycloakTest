import axios from "axios";
import keycloak from "./main.js"

const http = axios.create({
  baseURL: "http://localhost:8081",
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("vue-token");
    console.log(token)
    config.headers = {
      Authorization: `Bearer ${keycloak.token}`
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

http.interceptors.response.use(
    async (config) => {
        config.headers = {
        };
        return config;
    }
)


export default http;