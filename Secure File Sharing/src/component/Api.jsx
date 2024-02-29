// 

import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8080/", // Define your base URL here
});

export default instance;
