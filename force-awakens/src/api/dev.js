import axios from "axios";

const devApi = axios.create({
  baseURL: "https://dev.to/api",
});

export default devApi;
