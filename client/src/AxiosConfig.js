import Axios from "axios";
require("dotenv").config();

const baseURL = "http://localhost:3001";
//const baseURL = process.env.REACT_APP_BACKEND_URL;

const axios = Axios.create({
  baseURL: baseURL,
});

export default axios;
