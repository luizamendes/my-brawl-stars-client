import axios from "axios";

const apiURL = process.env.API_URL;

const client = axios.create({
  baseURL: `${apiURL}/api/`,
});

export default client;
