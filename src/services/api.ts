import axios from "axios";

const api = axios.create({
  baseURL: "https://connectdoctest.herokuapp.com/",
});

export default api;
